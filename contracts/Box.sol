// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Box {
    uint256 public box;

    function init(uint _box) public {
        box = _box;
    }

    function getBox() public view returns (uint256) {
        return box;
    }

    function setBox(uint256 _box) public {
        box = _box;
    }
}
