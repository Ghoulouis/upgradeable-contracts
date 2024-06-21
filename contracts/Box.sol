// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Box {
    uint256 public box4;
    uint256 public box;
    uint256 public box3;

    function init(uint256 _box) public {
        box = _box;
        box4 = 200;
    }

    function getBox() public view returns (uint256) {
        return box + 70;
    }

    function getBox4() public view returns (uint256) {
        return box4 + 70;
    }

    function setBox(uint256 _box) public {
        box = _box;
    }

    function setBox4(uint256 _box) public {
        box4 += _box;
    }
}
