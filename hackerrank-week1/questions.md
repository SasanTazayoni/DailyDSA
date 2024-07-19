# Q1 HackerRank Plus Minus

Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable.

## Example

arr = [1,1,0,-1,-1]

There are n = 5 elements, two positive, two negative and one zero. Their ratios are 2/5 = 0.400000, 2/5 = 0.400000 and 1/5 = 0.200000. Results are printed as:

```
0.400000
0.400000
0.200000
```

## Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers

## Print

Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with 6 digits after the decimal. The function should not return a value.

## Input Format

The first line contains an integer, n, the size of the array.
The second line contains n space-separated integers that describe arr[n].

## Constraints

0 < n ≤ 100

- 100 ≤ arr[i] ≤ 100

## Output Format

Print the following 3 lines, each to 6 decimals:

1. proportion of positive values
2. proportion of negative values
3. proportion of zeros

## Sample Input

```
STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
```

## Sample Output

```
0.500000
0.333333
0.166667
```

## Explanation

There are 3 positive numbers, 2 negative numbers, and 1 zero in the array.
The proportions of occurrence are positive: 3/6 = 0.500000, negative: 2/6 = 0.333333 and zeros: 1/6 = 0.166667.



# Q2 HackerRank Mini-Max Sum

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

## Example

arr = [1,3,5,7,9]

The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24. The function prints

```
16 24
```

## Function Description

Complete the miniMaxSum function in the editor below.

miniMaxSum has the following parameter(s):

- arr: an array of 5 integers

## Print

Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.

## Input Format

A single line of five space-separated integers.

## Constraints

1 ≤ arr[i] ≤ 10^9

## Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

## Sample Output

```
1 2 3 4 5
```

## Explanation

The numbers are 1, 2, 3, 4, and 5. Calculate the following sums using four of the five integers:

Sum everything except 1, the sum is 2 + 3 + 4 + 5 = 14.
Sum everything except 2, the sum is 1 + 3 + 4 + 5 = 13.
Sum everything except 3, the sum is 1 + 2 + 4 + 5 = 12.
Sum everything except 4, the sum is 1 + 2 + 3 + 5 = 11.
Sum everything except 5, the sum is 1 + 2 + 3 + 4 = 10.
Hints: Beware of integer overflow! Use 64-bit Integer.



# Q3 HackerRank Time Conversion

Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.

- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

## Example

- s = '12:01:00PM'
  Return '12:01:00'.

- s = '12:01:00AM'
  Return '00:01:00'.

## Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

- string s: a time in 12 hour format

## Returns

- string: the time in 24 hour format

## Input Format

A single string s that represents a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).

## Constraints

All input times are valid

## Sample Input

```
07:05:45PM
```

## Sample Output

```
19:05:45
```



# Q4 HackerRank Breaking the Records

Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

## Example

scores = [12,24,10,24]

Scores are in the same order as the games played. She tabulates her results as follows:

```
                                     Count
    Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1
```

Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

## Function Description

Complete the breakingRecords function in the editor below.

breakingRecords has the following parameter(s):

- int scores[n]: points scored per game

## Returns

int[2]: An array with the numbers of times she broke her records. Index 0 is for breaking most points records, and index 1 is for breaking least points records.
Input Format

The first line contains an integer n, the number of games.
The second line contains n space-separated integers describing the respective values of score(0),score(1),...score(n-1).

## Constraints

- 1 ≤ n ≤ 1000
- 0 ≤ scores[i] ≤ 10^8



# Q4 Camel Case 4

Camel Case is a naming style common in many programming languages. In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter (example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).

Your task is to write a program that creates or splits Camel Case variable, method, and class names.

## Input Format

* Each line of the input file will begin with an operation (S or C) followed by a semi-colon followed by M, C, or V followed by a semi-colon followed by the words you'll need to operate on.
* The operation will either be S (split) or C (combine).
* M indicates method, C indicates class, and V indicates variable.
* In the case of a split operation, the words will be a camel case method, class or variable name that you need to split into a space-delimited list of words starting with a lowercase letter.
* In the case of a combine operation, the words will be a space-delimited list of words starting with lowercase letters that you need to combine into the appropriate camel case String. Methods should end with an empty    set of parentheses to differentiate them from variable names.

## Output Format

* For each input line, your program should print either the space-delimited list of words (in the case of a split operation) or the appropriate camel case string (in the case of a combine operation).

## Sample Input

S;M;plasticCup()

C;V;mobile phone

C;C;coffee machine

S;C;LargeSoftwareBook

C;M;white sheet of paper

S;V;pictureFrame

## Sample Output

plastic cup

mobilePhone

CoffeeMachine

large software book

whiteSheetOfPaper()

picture frame

## Explanation

* Use Scanner to read in all information as if it were coming from the keyboard.
* Print all information to the console using standard output (System.out.print() or System.out.println()).
* Outputs must be exact (exact spaces and casing).
