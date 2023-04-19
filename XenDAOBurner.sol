// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;
interface IXEN {
    function balanceOf(address account) external view returns (uint256);

    function burn(address user, uint256 amount) external;
}

interface IXD {
    function mint(address _to, uint256 _amount) external;
    function mintNoExpectation() external;
    function transfer(address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}


contract XenDAOBurner {
    IXEN public immutable XEN;
    IXD public immutable XD;
    uint256 public immutable burnPerBatch = 1e6 * 1e18;
    uint256 public rewardPerBatch = 1e7 * 1e18;
    uint256 public immutable protocolFee; //roughly 20% of XEN value burned

    uint256 public lastRewardUpdate;

    constructor(IXEN _xen, IXD _xd, uint256 _fee) {
        XEN = _xen;
        XD = _xd;
        protocolFee = _fee;
        lastRewardUpdate = block.timestamp + 3 days;
    }

    function burnXEN(uint256 _batches) external payable {
        uint256 _fee = _batches * protocolFee;
        require(msg.value == _fee, "insufficient fee");
        payable(address(XD)).transfer(_fee);

        uint256 _burnAmount = _batches * burnPerBatch;
        require(XEN.balanceOf(msg.sender) >= _burnAmount, "XenDAOBurner: Insufficient XEN tokens for burn");

        XEN.burn(msg.sender, _burnAmount);
        XD.mint(msg.sender, _batches * rewardPerBatch);
    }

    function burnXENref(uint256 _batches, address _ref) external payable {
        require(msg.sender != _ref, "XenDAOBurner: cant refer self");

        uint256 _fee = _batches * protocolFee;
        require(msg.value == _fee, "insufficient fee");
        payable(address(XD)).transfer(_fee);

        uint256 _burnAmount = _batches * burnPerBatch;
        require(XEN.balanceOf(msg.sender) >= _burnAmount, "XenDAOBurner: Insufficient XEN tokens for burn");

        XEN.burn(msg.sender, _burnAmount);
        XD.mint(msg.sender, _batches * rewardPerBatch * 115 / 100);
        XD.mint(_ref, _batches * rewardPerBatch * 15 / 100);
    }

    function mintXDreserves() external {
        XD.mintNoExpectation();
    }

    function burnXD() external {
        XD.transfer(address(0), XD.balanceOf(address(this)));
    }

    function reduceRewards() external {
        require(block.timestamp > lastRewardUpdate + 1 days, "XenDAOBurner: Must wait atleast 24hours");
        rewardPerBatch = rewardPerBatch * 99 / 100;
        lastRewardUpdate = block.timestamp;
    }
}
