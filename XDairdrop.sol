// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/cryptography/MerkleProof.sol";

interface XD {
    function mint(address _to, uint256 _amount) external;
}

contract XDairdrop {
    address public immutable token;
    bytes32 public merkleRoot; //root
    uint256 public canMintUntil; // airdrop expiration date
    bool public merkleSet;

    mapping(address => bool) public hasClaimed;

    constructor(address _token) {
        token = _token;
    }

    event ClaimXD(address user, uint256 amount);

    function claim(uint256 amount, bytes32[] calldata merkleProof) external {
        require(!hasClaimed[msg.sender], 'Wallet Already Claimed');
        require(block.timestamp < canMintUntil, 'Airdrop expired');

        bytes32 node = keccak256(abi.encodePacked(msg.sender, amount));
        require(MerkleProof.verify(merkleProof, merkleRoot, node), 'proof incorrect');

        hasClaimed[msg.sender] = true;
        XD(token).mint(msg.sender, amount);

        emit ClaimXD(msg.sender, amount);
    }

    function isValid(address _user, uint256 amount, bytes32[] calldata merkleProof) external view returns(bool) {
        bytes32 node = keccak256(abi.encodePacked(_user, amount));
        return(MerkleProof.verify(merkleProof, merkleRoot, node));
    }

    function setMerkleRoot(bytes32 _root, uint256 _canMintUntil) external {
        require(msg.sender == 0xf16d68c08a05Cd824FC026FeC1191A3ee261c70A, 'not allowed');
        require(!merkleSet, 'already set');
        merkleRoot = _root;
        merkleSet = true;
        canMintUntil = _canMintUntil;
    }
}
