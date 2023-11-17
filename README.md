# Cache-Simulation-Project
CSARCH12 Group 6  
Chan, Ethan Lester L.  
Lu, Andre Giancarlo L.  
Teng, Adriel Shanlley T.  

Type of cache memory: 4-way BSA + MRU

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

    Altogether, we have 32+32+32 = 96 cache hits and 64+32+32+32 = 160 cache misses.
    
`b.) Random sequence: containing 4n blocks.`

    In this test case, we will be inputting 128 MM Blocks into the cache. 
    These blocks will be in a random sequence so to simplify the analysis, we will observe what happens in one set.
    For each set, the first 4 MM Blocks that are mapped into them (using MM Block# % 8) will miss and occupy Block 0, 1, 2, and 3 of that set in sequential order.
    From thereon, the next block that is mapped into that set will miss and since all the blocks of that set are already occupied, we will use the MRU replacement algorithm.
    In all of these sets, Block 3 will be the most recently used block, so we will replace the data in this block with the next MM block that is mapped to it.
    This will be the constant pattern throughout all the sets, wherein the data in Block 3 is consistently being replaced.
    Thus, for this test case, we will have 0 cache hits and 128 cache misses.
    

`c.) Mid-repeat blocks: Start at block 0, repeat the sequence in the middle two times up to n-1 blocks, after which continue up to 2n. 
     Then, repeat the sequence four times. Example: if n=8, sequence=0, 1,2,3,4,5,6, 1,2,3,4,5,6, 7,8,9,10,11,12,13,14,15 {4x}`
