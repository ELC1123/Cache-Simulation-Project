# Cache-Simulation-Project
CSARCH12 Group 6  
  
Chan, Ethan Lester L.  
Lu, Andre Giancarlo L.  
Teng, Adriel Shanlley T.  

Type of cache memory: 4-way BSA + MRU

Website Link: https://cache-simulation.onrender.com/index.html

Detailed analysis of test cases:
Since our cache contains 32 blocks and the set size is 4 blocks per set, we have 32/4 = 8 sets.

`a.) Sequential sequence: up to 2n cache block. Repeat the sequence four times. Example: 0,1,2,3,...,2n-1 {4x}`

    In this test case, we will be inputting 64 MM blocks into the cache, starting from 0 until 63. 
    Since the cache is empty, MM Blocks 0 to 31 will all miss and be mapped to their corresponding sets by calculating MM Block# % 8. 
    This will result in a mapping pattern wherein:

|       | Block 0 | Block 1 | Block 2 | Block 3 |
| :-----: | :-------: | :-------: | :-------: | :-------: |
| Set 0 |    0    |    8    |    16    |    24    |
| Set 1 |    1    |    9    |    17    |    25    |
| Set 2 |    2    |    10    |    18    |    26    |
| Set 3 |    3    |    11    |    19    |    27    |
| Set 4 |    4    |    12    |    20    |    28    |
| Set 5 |    5    |    13    |    21    |    29    |
| Set 6 |    6    |    14    |    22    |    30    |
| Set 7 |    7    |    15    |    23    |    31    |

    Now we will be inserting MM Blocks 32 to 63 in the cache. 
    However, since it is currently full, and these blocks are not in the cache they will all miss.
    This means we will have to make use of the MRU replacement algorithm. 
    To keep things simple, we will first observe Set 0 wherein we are attempting to insert 32. 
    Since Block 3 in Set 0 was the most recently used block, we will insert 32 into it. 
    The same goes for Set 1 wherein 33 will be inserted into Block 3 since that was the most recently used block in Set 1. 
    Thus, after inserting MM blocks 33 to 39, the cache will be:

|       | Block 0 | Block 1 | Block 2 | Block 3 |
| :-----: | :-------: | :-------: | :-------: | :-------: |
| Set 0 |    0    |    8    |    16    |    32    |
| Set 1 |    1    |    9    |    17    |    33    |
| Set 2 |    2    |    10    |    18    |    34    |
| Set 3 |    3    |    11    |    19    |    35    |
| Set 4 |    4    |    12    |    20    |    36    |
| Set 5 |    5    |    13    |    21    |    37    |
| Set 6 |    6    |    14    |    22    |    38    |
| Set 7 |    7    |    15    |    23    |    39    |

    Essentially, the pattern for this first iteration will always replace Block 3 since that will be the most recently used. 
    If we insert MM Blocks 40 to 63, the cache snapshot after the first iteration will be:

|       | Block 0 | Block 1 | Block 2 | Block 3 |
| :-----: | :-------: | :-------: | :-------: | :-------: |
| Set 0 |    0    |    8    |    16    |    56    |
| Set 1 |    1    |    9    |    17    |    57    |
| Set 2 |    2    |    10    |    18    |    58    |
| Set 3 |    3    |    11    |    19    |    59    |
| Set 4 |    4    |    12    |    20    |    60    |
| Set 5 |    5    |    13    |    21    |    61    |
| Set 6 |    6    |    14    |    22    |    62    |
| Set 7 |    7    |    15    |    23    |    63    |

  **With that said, the first iteration had 0 cache hits and 64 cache misses.**

    In the second iteration, we will insert MM Blocks 0 to 23 first, which will all result in hits since they are still in the cache. 
    However, when we try to insert 24, it results in a miss since 24 is no longer in the cache. 
    The most recently used block in Set 0 is Block 2 which contains 16. 
    Thus, we replace 16 with MM Block 24. This pattern continues until MM Block 31 wherein the cache snapshot will be:
    
|       | Block 0 | Block 1 | Block 2 | Block 3 |
| :-----: | :-------: | :-------: | :-------: | :-------: |
| Set 0 |    0    |    8    |    24    |    56    |
| Set 1 |    1    |    9    |    25    |    57    |
| Set 2 |    2    |    10    |    26    |    58    |
| Set 3 |    3    |    11    |    27    |    59    |
| Set 4 |    4    |    12    |    28    |    60    |
| Set 5 |    5    |    13    |    29    |    61    |
| Set 6 |    6    |    14    |    30    |    62    |
| Set 7 |    7    |    15    |    31    |    63    |

    The remaining MM Blocks from 32 to 55 will follow the same pattern. 
    In this second iteration, Block 2 of each set will constantly be replaced so the cache snapshot after inserting MM Block 55 is:

|       | Block 0 | Block 1 | Block 2 | Block 3 |
| :-----: | :-------: | :-------: | :-------: | :-------: |
| Set 0 |    0    |    8    |    48    |    56    |
| Set 1 |    1    |    9    |    49    |    57    |
| Set 2 |    2    |    10    |    50    |    58    |
| Set 3 |    3    |    11    |    51    |    59    |
| Set 4 |    4    |    12    |    52    |    60    |
| Set 5 |    5    |    13    |    53    |    61    |
| Set 6 |    6    |    14    |    54    |    62    |
| Set 7 |    7    |    15    |    55    |    63    |

    Then when we try to insert MM Blocks 56 to 63, they will all result in hits because they are all still in the cache. 
    Thus, the snapshot above is the final snapshot for the second iteration.
  **With that said, the second iteration had 32 cache hits and 32 cache misses.**

    For the third iteration, we insert MM Blocks 0 to 15 first, which will all result in hits since they are still in the cache. 
    However, when we try to insert 16, it results in a miss since 16 is no longer in the cache. 
    The most recently used block in Set 0 is Block 1 which contains 8.
    Thus, we replace 8 with MM Block 16. This pattern continues until MM Block 23 wherein the cache snapshot will be:

|       | Block 0 | Block 1 | Block 2 | Block 3 |
| :-----: | :-------: | :-------: | :-------: | :-------: |
| Set 0 |    0    |    16    |    48    |    56    |
| Set 1 |    1    |    17    |    49    |    57    |
| Set 2 |    2    |    18    |    50    |    58    |
| Set 3 |    3    |    19    |    51    |    59    |
| Set 4 |    4    |    20    |    52    |    60    |
| Set 5 |    5    |    21    |    53    |    61    |
| Set 6 |    6    |    22    |    54    |    62    |
| Set 7 |    7    |    23    |    55    |    63    |

    The remaining MM Blocks from 24 to 47 will follow the same pattern. 
    In this third iteration, Block 1 of each set will constantly be replaced so the cache snapshot after inserting MM Block 47 is:

|       | Block 0 | Block 1 | Block 2 | Block 3 |
| :-----: | :-------: | :-------: | :-------: | :-------: |
| Set 0 |    0    |    40    |    48    |    56    |
| Set 1 |    1    |    41    |    49    |    57    |
| Set 2 |    2    |    42    |    50    |    58    |
| Set 3 |    3    |    43    |    51    |    59    |
| Set 4 |    4    |    44    |    52    |    60    |
| Set 5 |    5    |    45    |    53    |    61    |
| Set 6 |    6    |    46    |    54    |    62    |
| Set 7 |    7    |    47    |    55    |    63    |

    Then when we try to insert MM Blocks 48 to 63, they will all result in hits because they are all still in the cache. 
    Thus, the snapshot above is the final snapshot for the third iteration.
  **With that said, the third iteration had 32 cache hits and 32 cache misses.**

    For the last iteration, we insert MM Blocks 0 to 7 first, which will all result in hits since they are still in the cache. 
    However, when we try to insert 8, it results in a miss since 8 is no longer in the cache. 
    The most recently used block in Set 0 is Block 0 which contains 0. 
    Thus, we replace 0 with MM Block 8. This pattern continues until MM Block 15 wherein the cache snapshot will be:

|       | Block 0 | Block 1 | Block 2 | Block 3 |
| :-----: | :-------: | :-------: | :-------: | :-------: |
| Set 0 |    8    |    40    |    48    |    56    |
| Set 1 |    9    |    41    |    49    |    57    |
| Set 2 |    10    |    42    |    50    |    58    |
| Set 3 |    11    |    43    |    51    |    59    |
| Set 4 |    12    |    44    |    52    |    60    |
| Set 5 |    13    |    45    |    53    |    61    |
| Set 6 |    14    |    46    |    54    |    62    |
| Set 7 |    15    |    47    |    55    |    63    |

    The remaining MM Blocks from 16 to 39 will follow the same pattern. 
    In this fourth iteration, Block 0 of each set will constantly be replaced so the cache snapshot after inserting MM Block 39 is:

|       | Block 0 | Block 1 | Block 2 | Block 3 |
| :-----: | :-------: | :-------: | :-------: | :-------: |
| Set 0 |    32    |    40    |    48    |    56    |
| Set 1 |    33    |    41    |    49    |    57    |
| Set 2 |    34    |    42    |    50    |    58    |
| Set 3 |    35    |    43    |    51    |    59    |
| Set 4 |    36    |    44    |    52    |    60    |
| Set 5 |    37    |    45    |    53    |    61    |
| Set 6 |    38    |    46    |    54    |    62    |
| Set 7 |    39    |    47    |    55    |    63    |

    Then when we try to insert MM Blocks 40 to 63, they will all result in hits because they are all still in the cache. 
    Thus, the snapshot above is the final snapshot of this test case.
  **With that said, the fourth iteration had 32 cache hits and 32 cache misses.**

    In total, the breakdown of the cache hits and misses are as follows:

|       | Hits | Misses | 
| :--------------: | :-------: | :-------: |
| First iteration |    0    |    64    |
| Second iteration |    32    |    32    |
| Third iteration |    32    |    32    |
| Fourth iteration |    32    |    32    |

  **Altogether, we have 32+32+32 = 96 cache hits and 64+32+32+32 = 160 cache misses.**
    
`b.) Random sequence: containing 4n blocks.`

    In this test case, we will be inputting 128 MM Blocks into the cache. 
    These blocks will be in a random sequence so to simplify the analysis, we will observe what happens in one set.
    For each set, the first 4 MM Blocks that are mapped into them (using MM Block# % 8) will miss and occupy Block 0, 1, 2, and 3 of that set in sequential order.
    From thereon, the next block that is mapped into that set will miss and since all the blocks of that set are already occupied, we will use the MRU replacement algorithm.
    In all of these sets, Block 3 will be the most recently used block, so we will replace the data in this block with the next MM block that is mapped to it.
    This will be the constant pattern throughout all the sets, wherein the data in Block 3 is consistently being replaced.
  **Thus, for this test case, we will have 0 cache hits and 128 cache misses.**
    

`c.) Mid-repeat blocks: Start at block 0, repeat the sequence in the middle two times up to n-1 blocks, after which continue up to 2n. 
     Then, repeat the sequence four times. Example: if n=8, sequence=0, 1,2,3,4,5,6, 1,2,3,4,5,6, 7,8,9,10,11,12,13,14,15 {4x}`

     For the last test case, we will be inputting a total of 376 MM Blocks into the cache.
     Since our n is 32, an iteration will start by inserting memory blocks 0 to 30 and then inserting memory blocks 1 to 63, therefore inserting a total of 94 MM blocks every iteration. 
     There will be 4 iterations of this pattern for the test case.
     To start the first iteration, the MM blocks 0 to 30 will be inserted. 
     Since the cache is empty, all the MM blocks will be inserted into their sets by calculating MM Block# % 8 since each block will miss.
     
|       | Block 0 | Block 1 | Block 2 | Block 3 |
| :-----: | :-------: | :-------: | :-------: | :-------: |
| Set 0 |    0    |    8    |    16    |    24    |
| Set 1 |    1    |    9    |    17    |    25    |
| Set 2 |    2    |    10    |    18    |    26    |
| Set 3 |    3    |    11    |    19    |    27    |
| Set 4 |    4    |    12    |    20    |    28    |
| Set 5 |    5    |    13    |    21    |    29    |
| Set 6 |    6    |    14    |    22    |    30    |
| Set 7 |    7    |    15    |    23    |          |

      Next, blocks 1 to 30 will be inserted which will all be hits since all these MM blocks are inside the cache. 
      Then, blocks 31 to 63 will be inserted which will all result in misses since none of them are in the cache. 
      Block 31 will be first inserted into the final empty cache block.

|       | Block 0 | Block 1 | Block 2 | Block 3 |
| :-----: | :-------: | :-------: | :-------: | :-------: |
| Set 0 |    0    |    8    |    16    |    24    |
| Set 1 |    1    |    9    |    17    |    25    |
| Set 2 |    2    |    10    |    18    |    26    |
| Set 3 |    3    |    11    |    19    |    27    |
| Set 4 |    4    |    12    |    20    |    28    |
| Set 5 |    5    |    13    |    21    |    29    |
| Set 6 |    6    |    14    |    22    |    30    |
| Set 7 |    7    |    15    |    23    |    31    |

      Then, since the cache simulation is following a most recently used replacement algorithm, the blocks will be repeatedly inserted into Block 3 since that is the block that contains the most recently used cache blocks. 
      This ends the first iteration.
    **With that said, the first iteration had 30 cache hits and 64 cache misses.**

|       | Block 0 | Block 1 | Block 2 | Block 3 |
| :-----: | :-------: | :-------: | :-------: | :-------: |
| Set 0 |    0    |    8    |    16    |    56    |
| Set 1 |    1    |    9    |    17    |    57    |
| Set 2 |    2    |    10    |    18    |    58    |
| Set 3 |    3    |    11    |    19    |    59    |
| Set 4 |    4    |    12    |    20    |    60    |
| Set 5 |    5    |    13    |    21    |    61    |
| Set 6 |    6    |    14    |    22    |    62    |
| Set 7 |    7    |    15    |    23    |    63    |

    The second iteration will then follow. First, MM blocks 0 to 23 will all be hits, only changing the age of the cache block. 
    Then, MM blocks 24 to 30 will be inserted. These blocks will result in misses. Therefore they will replace Block 2 in Sets 0 to 6.

|       | Block 0 | Block 1 | Block 2 | Block 3 |
| :-----: | :-------: | :-------: | :-------: | :-------: |
| Set 0 |    0    |    8    |    24    |    56    |
| Set 1 |    1    |    9    |    25    |    57    |
| Set 2 |    2    |    10    |    26    |    58    |
| Set 3 |    3    |    11    |    27    |    59    |
| Set 4 |    4    |    12    |    28    |    60    |
| Set 5 |    5    |    13    |    29    |    61    |
| Set 6 |    6    |    14    |    30    |    62    |
| Set 7 |    7    |    15    |    23    |    63    |

    Then, MM blocks 1 to 15 will be inserted and will all result in hits, so only the age of the cache block will change. 
    Then, MM blocks 16 to 22 will be inserted and will all result in misses, replacing Block 1 in Sets 0 to 6.

|       | Block 0 | Block 1 | Block 2 | Block 3 |
| :-----: | :-------: | :-------: | :-------: | :-------: |
| Set 0 |    0    |    16    |    24    |    56    |
| Set 1 |    1    |    17    |    25    |    57    |
| Set 2 |    2    |    18    |    26    |    58    |
| Set 3 |    3    |    19    |    27    |    59    |
| Set 4 |    4    |    20    |    28    |    60    |
| Set 5 |    5    |    21    |    29    |    61    |
| Set 6 |    6    |    22    |    30    |    62    |
| Set 7 |    7    |    15    |    23    |    63    |

    Next, MM blocks 23 to 30 will be inserted and will all result in hits, only changing the age of the cache block. 
    This is followed by inserting MM blocks 31 to 55 which will all result in misses, therefore changing the most recently used cache blocks which are all in block 2. 
    Lastly, MM blocks 56 to 63 will be inserted, which will all result in hits, thus ending the second iteration.
  **With that said, the second iteration had 55 cache hits and 39 cache misses.**

|       | Block 0 | Block 1 | Block 2 | Block 3 |
| :-----: | :-------: | :-------: | :-------: | :-------: |
| Set 0 |    0    |    16    |    48    |    56    |
| Set 1 |    1    |    17    |    49    |    57    |
| Set 2 |    2    |    18    |    50    |    58    |
| Set 3 |    3    |    19    |    51    |    59    |
| Set 4 |    4    |    20    |    52    |    60    |
| Set 5 |    5    |    21    |    53    |    61    |
| Set 6 |    6    |    22    |    54    |    62    |
| Set 7 |    7    |    15    |    55    |    63    |

    Next, the third iteration starts by inserting MM blocks 0 to 7 which will all result in hits. 
    Then, MM blocks 8 to 14 will then be inserted. Since all of these blocks will result in misses, the cache blocks in Sets 0 to 6 of Block 0 will be replaced.

|       | Block 0 | Block 1 | Block 2 | Block 3 |
| :-----: | :-------: | :-------: | :-------: | :-------: |
| Set 0 |    8    |    16    |    48    |    56    |
| Set 1 |    9    |    17    |    49    |    57    |
| Set 2 |    10    |    18    |    50    |    58    |
| Set 3 |    11    |    19    |    51    |    59    |
| Set 4 |    12    |    20    |    52    |    60    |
| Set 5 |    13    |    21    |    53    |    61    |
| Set 6 |    14    |    22    |    54    |    62    |
| Set 7 |    7    |    15    |    55    |    63    |

    Then, MM blocks 15 to 22 will be inserted and will all result in hits. 
    This is followed by inserting MM blocks 23 to 30 and then 1 to 6, which will all result in misses and will replace the cache blocks of Block 1 in Sets 1 to 6.

|       | Block 0 | Block 1 | Block 2 | Block 3 |
| :-----: | :-------: | :-------: | :-------: | :-------: |
| Set 0 |    8    |    24    |    48    |    56    |
| Set 1 |    9    |    1    |    49    |    57    |
| Set 2 |    10    |    2    |    50    |    58    |
| Set 3 |    11    |    3    |    51    |    59    |
| Set 4 |    12    |    4    |    52    |    60    |
| Set 5 |    13    |    5    |    53    |    61    |
| Set 6 |    14    |    6    |    54    |    62    |
| Set 7 |    7    |    23    |    55    |    63    |

    Next, MM blocks 7 to 14 will be inserted and will all result in hits. 
    Then, MM blocks 15 to 22 will follow, which will all result in misses and will replace all the cache blocks in Block 0.

|       | Block 0 | Block 1 | Block 2 | Block 3 |
| :-----: | :-------: | :-------: | :-------: | :-------: |
| Set 0 |    16    |    24    |    48    |    56    |
| Set 1 |    17    |    1    |    49    |    57    |
| Set 2 |    18    |    2    |    50    |    58    |
| Set 3 |    19    |    3    |    51    |    59    |
| Set 4 |    20    |    4    |    52    |    60    |
| Set 5 |    21    |    5    |    53    |    61    |
| Set 6 |    22    |    6    |    54    |    62    |
| Set 7 |    15    |    23    |    55    |    63    |

    This is followed by inserting MM blocks 23 and 24 which will result in hits. 
    After, MM blocks 25 to 47 will be inserted. This will all result in misses, which will replace the cache blocks of Block 1 in Sets 0 and 7 and Block 0 in Sets 1 to 6. 
    Lastly, MM blocks 48 to 63 will be inserted and will all result in hits. This ends the third iteration.
  **With that said, the third iteration had 42 cache hits and 52 cache misses.**

|       | Block 0 | Block 1 | Block 2 | Block 3 |
| :-----: | :-------: | :-------: | :-------: | :-------: |
| Set 0 |    16    |    40    |    48    |    56    |
| Set 1 |    41    |    1    |    49    |    57    |
| Set 2 |    42    |    2    |    50    |    58    |
| Set 3 |    43    |    3    |    51    |    59    |
| Set 4 |    44    |    4    |    52    |    60    |
| Set 5 |    45    |    5    |    53    |    61    |
| Set 6 |    46    |    6    |    54    |    62    |
| Set 7 |    15    |    47    |    55    |    63    |

    Lastly, we move on to the final iteration. 
    First, block 0 will be inserted. Since this is a miss, it will replace the cache block of Block 3 in Set 0 since this is the most recently used block. 
    Then, blocks 1 to 6 will be inserted, which will all result in misses and will now be the most recently used cache blocks. 

|       | Block 0 | Block 1 | Block 2 | Block 3 |
| :-----: | :-------: | :-------: | :-------: | :-------: |
| Set 0 |    16    |    40    |    48    |    0    |
| Set 1 |    41    |    1    |    49    |    57    |
| Set 2 |    42    |    2    |    50    |    58    |
| Set 3 |    43    |    3    |    51    |    59    |
| Set 4 |    44    |    4    |    52    |    60    |
| Set 5 |    45    |    5    |    53    |    61    |
| Set 6 |    46    |    6    |    54    |    62    |
| Set 7 |    15    |    47    |    55    |    63    |

    Then, MM blocks 7 to 14 will be inserted and will all result in misses. These blocks will replace Set 0 and Set 7 of Block 3 and Sets 1 to 6 of Block 3 will be replaced. 
    MM blocks 15 and 16 will then be inserted and will result in hits, making Set 0 and Set 7 of Block 0 the most recently used blocks.

|       | Block 0 | Block 1 | Block 2 | Block 3 |
| :-----: | :-------: | :-------: | :-------: | :-------: |
| Set 0 |    16    |    40    |    48    |    8    |
| Set 1 |    41    |    9    |    49    |    57    |
| Set 2 |    42    |    10    |    50    |    58    |
| Set 3 |    43    |    11   |    51    |    59    |
| Set 4 |    44    |    12   |    52    |    60    |
| Set 5 |    45    |    13   |    53    |    61    |
| Set 6 |    46    |    14   |    54    |    62    |
| Set 7 |    15    |    47    |    55    |    7    |

    Blocks 17 to 30 will then be inserted, followed by blocks 1 to 6. These will all result in misses and will replace the cache blocks of Set 0 and Set 7 of Block 0 and Sets 1 to 6 of Block 1. 
    This is then followed by inserting blocks 7 and 8, which will result in hits. This also makes the cache blocks of Block 3 in Sets 0 and 7 the most recently used cache blocks. 

|       | Block 0 | Block 1 | Block 2 | Block 3 |
| :-----: | :-------: | :-------: | :-------: | :-------: |
| Set 0 |    24    |    40    |    48    |    8    |
| Set 1 |    41    |    1    |    49    |    57    |
| Set 2 |    42    |    2    |    50    |    58    |
| Set 3 |    43    |    3    |    51    |    59    |
| Set 4 |    44    |    4    |    52    |    60    |
| Set 5 |    45    |    5    |    53    |    61    |
| Set 6 |    46    |    6    |    54    |    62    |
| Set 7 |    23    |    47    |    55    |    7    |

    Next, Blocks 9 to 22 will be inserted, which will all result in misses, thus replacing the cache blocks of Block 3 in Sets 0 and 7 and Block 1 in Sets 1 to 6. 
    This is followed by MM blocks 23 and 24, which will result in hits. This also makes Block 0 in Sets 0 and 7 the most recently used cache blocks.

|       | Block 0 | Block 1 | Block 2 | Block 3 |
| :-----: | :-------: | :-------: | :-------: | :-------: |
| Set 0 |    24    |    40    |    48    |    16    |
| Set 1 |    41    |    17    |    49    |    57    |
| Set 2 |    42    |    18    |    50    |    58    |
| Set 3 |    43    |    19    |    51    |    59    |
| Set 4 |    44    |    20    |    52    |    60    |
| Set 5 |    45    |    21    |    53    |    61    |
| Set 6 |    46    |    22    |    54    |    62    |
| Set 7 |    23    |    47    |    55    |    15    |

    Next, MM blocks 25 to 39 will be inserted. These will all result in misses and will replace the cache blocks of Block 0 in Sets 0 and 7 and Block 1 in Sets 1 to 6. 
    This is then followed by MM blocks 40 to 54, which will all result in hits. The most recently used blocks are now at Sets 0 to 7 of Block 2.

|       | Block 0 | Block 1 | Block 2 | Block 3 |
| :-----: | :-------: | :-------: | :-------: | :-------: |
| Set 0 |    32    |    40    |    48    |    16    |
| Set 1 |    41    |    33    |    49    |    57    |
| Set 2 |    42    |    34    |    50    |    58    |
| Set 3 |    43    |    35    |    51    |    59    |
| Set 4 |    44    |    36    |    52    |    60    |
| Set 5 |    45    |    37    |    53    |    61    |
| Set 6 |    46    |    38    |    54    |    62    |
| Set 7 |    39    |    47    |    55    |    15    |

    MM block 56 will then be inserted and will replace Block 2 of Set 0 since this is a miss. 
    This is followed by MM blocks 57 to 62, which will all result in hits. 
    Lastly, MM block 63 will be inserted and will replace Block 2 of Set 7 since this is a miss. 
    This ends the final iteration and concludes the test case. The final snapshot of the cache map can be seen below.
  **With that said, the fourth iteration had 34 cache hits and 60 cache misses.**

|       | Block 0 | Block 1 | Block 2 | Block 3 |
| :-----: | :-------: | :-------: | :-------: | :-------: |
| Set 0 |    32    |    40    |    56    |    16    |
| Set 1 |    41    |    33    |    49    |    57    |
| Set 2 |    42    |    34    |    50    |    58    |
| Set 3 |    43    |    35    |    51    |    59    |
| Set 4 |    44    |    36    |    52    |    60    |
| Set 5 |    45    |    37    |    53    |    61    |
| Set 6 |    46    |    38    |    54    |    62    |
| Set 7 |    39    |    47    |    63    |    15    |

    In total, the breakdown of the cache hits and misses are as follows:

|       | Hits | Misses | 
| :--------------: | :-------: | :-------: |
| First iteration |    30    |    64    |
| Second iteration |    55    |    39    |
| Third iteration |    42    |    52    |
| Fourth iteration |    34    |    60    |

  **Altogether, we have 30+55+42+34 = 161 cache hits and 64+39+52+60 = 215 cache misses.**
