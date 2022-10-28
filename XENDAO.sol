//SPDX-License-Identifier: NONE
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

interface IXEN {
    function claimRank(uint256 term) external;
    function claimMintReward() external;
    function transfer(address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
    function userMints(address) external view returns (address, uint256, uint256, uint256, uint256, uint256);
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);
}

contract XENDAO is ERC20("XEN DAO", "XD"), ReentrancyGuard {
	struct UserInfo {
        uint256 amount;         // tokens burned from user
        uint256 rewardDebt;     // Reward debt
    }
	
    uint256 public constant INITIALARTIFICIALBURN = 10000; //for first deposit
	address public immutable XEN = <XEN>;
    uint256 public immutable MAXFEE; 
	
	address public immutable implementation;

	mapping (address => UserInfo) public userInfo;
	
	uint256 public accEthPerShare;
	uint256 public latestBalance; //latest Fee balance
	
	// can transfer minting right to new contracts(in case there is optimization of the minting process)
	// rug-pull proof (5-day delay)
	address public canMint;
    address public registerMinter; // for time lock
    uint256 public daysDelay = 3; // 3 day time lock (can be extended)
    uint256 public timeWithDelay; //  "time lock"
    bool public canAssignNewMinter = true; // can be renounced
	
    //initial rewards
	uint256 public reward = 1e24; //1 million xenDao per mint 
	uint256 public rewardWbonus = 125 * 1e22; // +25% bonus if referred
	uint256 public refbonus = 250 * 1e21; // 250K tokens referral bonus
	uint256 public sendReward = 750 * 1e21; //750K reward
	uint256 public sendRewardBonus = 850 * 1e21; //850K reward
	uint256 public sendRewardRef = 200 * 1e21; //200K reward
	
    uint256 public fee;
	uint256 public claimAgainFee; 
    uint256 public sendFee;

	uint256 public lastRewardUpdate;
	uint256 public dayCount = 1;

	uint256 public totalBurned = 10000; //amount staked
	
	uint256 public alreadyMinted = 0;
	address public noExpectationAddress = 0xf16d68c08a05Cd824FC026FeC1191A3ee261c70A;
	
    mapping(address => uint256 []) public userQuantities;
	
	constructor(uint256 _fee, uint256 _maxFee, address _implementation) {
		lastRewardUpdate = block.timestamp + 13 * 24 * 3600; //steady for first 14 days
        fee = _fee;
        claimAgainFee = _fee;
        sendFee = _fee;
        MAXFEE = _maxFee;
		implementation = _implementation;
	}

    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}

    function createContract (bytes memory data, uint256 quantity, bytes calldata _salt) external payable {
		require(msg.value == fee*quantity, "ETH sent is incorrect");
		address _clone;
        bytes32 salt;
        for(uint i=0; i<quantity; i++) {
            salt = keccak256(abi.encodePacked(_salt,i,msg.sender));
			_clone = cloneDeterministic(implementation, salt);
			Implementation(_clone).a(data);
        }
        userQuantities[msg.sender].push(quantity);
		_mint(msg.sender, quantity * reward);
    }
	
    function createContractRef (bytes memory data, uint256 quantity, bytes calldata _salt, address referral) external payable {
        require(msg.value == fee*quantity, "ETH sent is incorrect");
		address _clone;
        bytes32 salt;
        for(uint i=0; i<quantity; i++) {
            salt = keccak256(abi.encodePacked(_salt,i,msg.sender));
            _clone = cloneDeterministic(implementation, salt);
			Implementation(_clone).a(data);
        }
        userQuantities[msg.sender].push(quantity);
		_mint(msg.sender, quantity * rewardWbonus);
		if(referral != msg.sender) { _mint(referral, quantity * refbonus); }
    }
	
	function stake(uint256 _amount) external nonReentrant {
		uint256 _tokenChange = address(this).balance - latestBalance;
		accEthPerShare = accEthPerShare + _tokenChange * 1e12 / totalBurned;
		
		_burn(msg.sender, _amount);
		totalBurned+= _amount;
		
		if(userInfo[msg.sender].amount == 0) { //no previous balance
			userInfo[msg.sender].amount = _amount;
            userInfo[msg.sender].rewardDebt = userInfo[msg.sender].amount * accEthPerShare / 1e12; 
		} else {
			uint256 _pending = userInfo[msg.sender].amount * accEthPerShare / 1e12 - userInfo[msg.sender].rewardDebt;
			userInfo[msg.sender].amount+= _amount;
            userInfo[msg.sender].rewardDebt = userInfo[msg.sender].amount * accEthPerShare / 1e12 - _pending; 
		}
		latestBalance = address(this).balance;
	}

	function harvest() public nonReentrant {
		uint256 _tokenChange = address(this).balance - latestBalance;
		accEthPerShare = accEthPerShare + _tokenChange * 1e12 / totalBurned;
		uint256 _pending = userInfo[msg.sender].amount * accEthPerShare / 1e12 - userInfo[msg.sender].rewardDebt;
		
		userInfo[msg.sender].rewardDebt = userInfo[msg.sender].amount * accEthPerShare / 1e12; // reset 
		payable(msg.sender).transfer(_pending);
		latestBalance = address(this).balance;
	}
	
	function withdraw() external nonReentrant {
		uint256 _tokenChange = address(this).balance - latestBalance;
		accEthPerShare = accEthPerShare + _tokenChange * 1e12 / totalBurned;
		
		uint256 _pending = userInfo[msg.sender].amount * accEthPerShare / 1e12 - userInfo[msg.sender].rewardDebt;
		
		uint256 _tokensStaked = userInfo[msg.sender].amount;
		
		userInfo[msg.sender].amount = 0;
		userInfo[msg.sender].rewardDebt = 0;
		
		payable(msg.sender).transfer(_pending);
		latestBalance = address(this).balance;
		
		_mint(msg.sender, _tokensStaked);
		totalBurned-= _tokensStaked;
	}

    // if better-optimized contract is launched, minting privileges can be transferred
    function mint(address _to, uint256 _amount) external {
        require(msg.sender == canMint);
        _mint(_to, _amount);
    }
	
	function aMassSend(address[] calldata _address, uint256 _amount) external payable nonReentrant {
		uint256 _quantity = _address.length;
        require(msg.value == _quantity * sendFee + _quantity * _amount, "fee insufficient!");
		
		for(uint i=0; i < _quantity; i++) {
            payable(_address[i]).transfer(_amount);
        }
	
		_mint(msg.sender, _quantity * sendReward);
	}

    function vmassSendRef(address[] calldata _address, uint256 _amount, address _referral) external payable nonReentrant {
		uint256 _quantity = _address.length;
        require(msg.value == _quantity * sendFee + _quantity * _amount, "total send + fee insufficient!");
        require(msg.sender != _referral, "not allowed");
		
		for(uint i=0; i < _quantity; i++) {
            payable(_address[i]).transfer(_amount);
        }
        
		_mint(msg.sender, _quantity * sendRewardBonus);
        _mint(_referral, _quantity * sendRewardRef);
	}
	
    // used for minting & claiming again
    function multiCall(address[] calldata _contracts, bytes memory data) external {
        for(uint256 i=0; i < _contracts.length; i++) {
            Implementation(_contracts[i]).a(data);
        }
    }

    function claimAgainWithFee(address[] calldata _contracts, address _referral, bytes memory data) external payable {
        uint256 _quantity = _contracts.length;
        uint256 _tAmount = claimAgainFee * _quantity;
        require(msg.value == _tAmount, "ETH sent is incorrect");

        for(uint256 i=0; i < _contracts.length; i++) {
            Implementation(_contracts[i]).a(data);
        }
        
        if(_referral != msg.sender) {
            _mint(msg.sender, _quantity * sendRewardBonus);
            _mint(_referral, _quantity * sendRewardRef);
        } else {
            _mint(msg.sender, _quantity * sendReward);
        }
    }

    //returns earnings, amount staked and total Staked
	function userStakeEarnings(address _user) external view returns (uint256, uint256, uint256) {
		uint256 _tokenChange = address(this).balance - latestBalance;
		uint256 _tempAccEthPerShare = accEthPerShare + _tokenChange * 1e12 / totalBurned;
		
		uint256 _pending = userInfo[_user].amount * _tempAccEthPerShare / 1e12 - userInfo[_user].rewardDebt;
		
		return (_pending, userInfo[_user].amount, totalBurned);
	}
	
    function userMints(address _user) external view returns(uint256) {
        return userQuantities[_user].length; 
    }

    function contractAddress(bytes calldata _salt, uint256 _mintNr, address _user) public view returns (address) {
        return predictDeterministicAddress(implementation, keccak256(abi.encodePacked(_salt,_mintNr,_user)), address(this));
    }

    function contractAddressWithHash(bytes32 _salt) public view returns (address) {
        return predictDeterministicAddress(implementation, _salt, address(this));
    }
	
    function multiData(address _user, uint256 _id, address _contractAddress) external view returns (uint256, uint256) {
        return (userQuantities[_user][_id], getMaturationDate(_contractAddress));
    }

    function getMaturationDate(address _contract) public view returns (uint256) {
        (, , uint256 maturation, , , ) = IXEN(XEN).userMints(_contract);
        return maturation;
    }

    function getClaimCallData(uint256 term) external pure returns (bytes memory) {
        return abi.encodeWithSignature("claimRank(uint256)", term);
    }

     function getMintCallData() external pure returns (bytes memory) {
        return abi.encodeWithSignature("mint()");
    }
	
	function getTransferCallData(address _to, uint256 _amount) external pure returns (bytes memory) {
        return abi.encodeWithSignature("transfer(address,uint256)", _to, _amount);
    }

    function transferAllCallData(address _contract, address _to) external view returns (bytes memory) {
        return abi.encodeWithSignature("transfer(address,uint256)", _to, IXEN(XEN).balanceOf(_contract));
    }

    function getSalt(bytes calldata _salt, uint256 _mintNr, address _user) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(_salt,_mintNr,_user));
    }
	
	function totalSupply() public view virtual override returns (uint256) {
        return super.totalSupply() + totalBurned - INITIALARTIFICIALBURN;
    }

    function getBatchAddresses(bytes32[] calldata _salt, uint256 _claimId, address _user) external view returns (address[] memory) {
        uint256 _batchLength = userQuantities[_user][_claimId];
        address[] memory _addresses;
        for(uint i=0; i<_batchLength; i++) {
            _addresses[i] = predictDeterministicAddress(implementation, _salt[i], address(this));     
        }
        return _addresses;
    }
	
	// inflationary only for the first 3-4 months
	function decreaseRewards() external {
		require(block.timestamp - lastRewardUpdate > 86400, "Decrease not yet eligible. Must wait 1 day between calls");
		reward = reward * (100 - dayCount) / 100;
		rewardWbonus = rewardWbonus * (100 - dayCount) / 100;
		refbonus = refbonus * (100 - dayCount) / 100;

        sendReward = sendReward * (100 - dayCount) / 100;
		sendRewardBonus = sendRewardBonus * (100 - dayCount) / 100;
		sendRewardRef = sendRewardRef * (100 - dayCount) / 100;
		
		dayCount++;
	}
	
	function stopInflation() external {
		require(block.timestamp > 1673740800, "Must wait until 15th Jan 2023");
		reward = 0;
		rewardWbonus = 0;
		refbonus = 0;

        sendReward = 0;
        sendRewardBonus = 0;
        sendRewardRef = 0;
	}
	
	function mintNoExpectation() external nonReentrant {
        require(msg.sender == noExpectationAddress, "not allowed");
		uint256 _totalAllowed = totalSupply() / 10;
		uint256 _toMint = _totalAllowed - alreadyMinted;
		alreadyMinted+= _toMint;
		_mint(noExpectationAddress, _toMint);
	}

    function setFee(uint256 _newFee, uint256 _againFee, uint256 _sendFee) external {
        require(_newFee <= MAXFEE && _againFee <= MAXFEE && _sendFee <= MAXFEE, "over limit");
        require(msg.sender == noExpectationAddress);
        fee = _newFee;
        claimAgainFee = _againFee;
        sendFee = _sendFee; 
    }
	
	//set mint reward for mass send
	function setSendingReward(uint256 _new) external {
		require(msg.sender == noExpectationAddress);
		require(_new <= reward, "can't be bigger than reward");
		sendReward = _new;
		sendRewardBonus = _new * 125 / 100;
		sendRewardRef = _new * 25 / 100;
	}
	
	function wchangeAddress(address _noExpect) external {
		require(msg.sender == noExpectationAddress);
		noExpectationAddress = _noExpect;
	}
	
    function wdaysDelay(uint256 _newDelay) external {
		require(msg.sender == noExpectationAddress);
        require(_newDelay > daysDelay, "can only increase");
		daysDelay = _newDelay;
	}

   function wassignNewMinter(address _new) external {
        require(canAssignNewMinter, "renounced");
        require(msg.sender == noExpectationAddress);
        registerMinter = _new;
        timeWithDelay = block.timestamp + daysDelay * 24 * 3600;
    }

    function wfinalizeMinterAfterDelay() external {
        require(canAssignNewMinter);
        require(registerMinter != address(0));
        require(block.timestamp > timeWithDelay);
        canMint = registerMinter;
    }

    function wrenounceNewMinters() external {
        require(msg.sender == noExpectationAddress, "not allowed");
        canAssignNewMinter = false;
    }
	
    //source: https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/Clones.sol
    /**
     * @dev Computes the address of a clone deployed using {Clones-cloneDeterministic}.
     */

    function cloneDeterministic(address _implementation, bytes32 salt) internal returns (address instance) {
        /// @solidity memory-safe-assembly
        assembly {
            // Cleans the upper 96 bits of the `implementation` word, then packs the first 3 bytes
            // of the `implementation` address with the bytecode before the address.
            mstore(0x00, or(shr(0xe8, shl(0x60, _implementation)), 0x3d602d80600a3d3981f3363d3d373d3d3d363d73000000))
            // Packs the remaining 17 bytes of `implementation` with the bytecode after the address.
            mstore(0x20, or(shl(0x78, _implementation), 0x5af43d82803e903d91602b57fd5bf3))
            instance := create2(0, 0x09, 0x37, salt)
        }
        require(instance != address(0), "ERC1167: create2 failed");
    }

    function predictDeterministicAddress(
        address _implementation,
        bytes32 salt,
        address deployer
    ) internal pure returns (address predicted) {
        /// @solidity memory-safe-assembly
        assembly {
            let ptr := mload(0x40)
            mstore(add(ptr, 0x38), deployer)
            mstore(add(ptr, 0x24), 0x5af43d82803e903d91602b57fd5bf3ff)
            mstore(add(ptr, 0x14), _implementation)
            mstore(ptr, 0x3d602d80600a3d3981f3363d3d373d3d3d363d73)
            mstore(add(ptr, 0x58), salt)
            mstore(add(ptr, 0x78), keccak256(add(ptr, 0x0c), 0x37))
            predicted := keccak256(add(ptr, 0x43), 0x55)
        }
    }
}

contract Implementation {
    address private o;
    uint256 private u;

    function a(bytes memory data) external {
        if(u > 0) { 
            require(tx.origin == o);
        } else {
            o = tx.origin;
            u = 1;
        }
        assembly {
            let succeeded := call(
                gas(),
                <XEN>,
                0,
                add(data, 0x20),
                mload(data),
                0,
                0
            )
        }
    }
}
