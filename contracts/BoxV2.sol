// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract BoxV2 {
    uint256 public box;

    // Emitted when the stored value changes
    event ValueChanged(uint256 newValue);

    function initializer(uint _box) public {
        box = _box;
    }

    function getBox() public view returns (uint256) {
        return box;
    }

    function setBox(uint256 _box) public {
        box = _box;
    }

    function increment() public {
        box = box + 1;
        emit ValueChanged(box);
    }
}
