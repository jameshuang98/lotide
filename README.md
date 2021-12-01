# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jameshuang98/lotide`

**Require it:**

`const _ = require('@jameshuang98/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: assertion check to see if two arrays are equal
* `assertEqual`: assertion check to see if two values are equal
* `assertObjectsEqual`: assertion check to see if two objects are equal
* `countLetters`: counting individual letters in a string
* `countOnly`: counting only specific items in an array
* `eqArrays`: checking if two arrays are equal
* `eqObjects`: checking if two objects are equal
* `findKey`: finding the key of an object given a callback function
* `findKeyByValue`: finding the key of an object given a value
* `head`: returning the first element of an array
* `letterPositions`: returning the positions of a specific letter in an array
* `map`: similar to Array.map() function
* `middle`: returning the middle element(s) of an array
* `tail`: returning the tail elements of an array
* `takeUntil`: returning the array until a specific condition given by a callback function
* `head`: returning the first element of an array
* `without`: returning an array without a specific item