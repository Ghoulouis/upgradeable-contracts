// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";

contract A is Ownable {
    uint256 public box;

    address sender;

    constructor() Ownable(msg.sender) {
        sender = msg.sender;
    }

    function getBox() public view returns (uint256) {
        return box;
    }

    function setBox(uint256 _box) public onlyOwner {
        box = _box;
    }
}

contract B {
    A public a;

    function init(address _a) public {
        a = A(_a);
    }

    function getBox() public view returns (uint256) {
        return a.getBox();
    }

    function setBox(uint256 _box) public {
        a.setBox(_box);
    }

    function setGrand(address _owner) public {
        a.transferOwnership(_owner);
    }
}
