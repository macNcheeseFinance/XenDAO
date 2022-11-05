//SPDX-License-Identifier: NONE
pragma solidity 0.8.0;

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
}

contract GetBalances {
    address public immutable XEN = <XEN>;

    function multiCall(address[] calldata _contracts, bytes[] calldata _data) external {
        for(uint256 i=0; i < _contracts.length; i++) {
            Implementation(_contracts[i]).a(_data[i]);
        }
    }

    function getTransferCallData(address[] calldata _addresses, address _to) external view returns (bytes[] memory, uint256) {
        uint256 _len = _addresses.length;
        bytes[] memory callDatas = new bytes[](_len);
        uint256 balance;
        uint256 totalTokens = 0;
        for(uint i=0; i< _len; i++) {
            balance = IERC20(XEN).balanceOf(_addresses[i]);
            totalTokens+= balance;
            callDatas[i] = abi.encodeWithSignature("transfer(address,uint256)", _to, balance);
        }
        return (callDatas, totalTokens);
    }

    function getContracts(bytes32[] calldata salts, address implementation, address deployer) external pure returns(address[] memory) {
        address[] memory addresses = new address[](salts.length);
        for(uint i=0; i<salts.length; i++) {
            addresses[i] = predictDeterministicAddress(implementation, salts[i], deployer);
        }
        return addresses;
    }

    function getContractsRegular(bytes calldata _salt, uint256 _mintNr, address _user, uint256 _batchLength, address implementation, address deployer) external pure returns(address[] memory) {
        address[] memory addresses = new address[](_batchLength);
        for(uint i=0; i<_batchLength; i++) {
            addresses[i] = predictDeterministicAddress(implementation, keccak256(abi.encodePacked(_salt,_mintNr,_user)), deployer);
        }
        return addresses;
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
