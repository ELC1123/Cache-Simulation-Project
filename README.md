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
    MM Blocks 0 to 31 will be mapped to their corresponding sets by calculating MM Block# % 8. This will result in a mapping pattern wherein:
    
    Set 0 will contain MM Blocks 0, 8, 16, and 24
    Set 1 will contain MM Blocks 1, 9, 17, and 25 
    Set 2 will contain MM Blocks 2, 10, 18, and 26 
    Set 3 will contain MM Blocks 3, 11, 19, and 27 
    Set 4 will contain MM Blocks 4, 12, 20, and 28 
    Set 5 will contain MM Blocks 5, 13, 21, and 29 
    Set 6 will contain MM Blocks 6, 14, 22, and 30 
    Set 7 will contain MM Blocks 7, 15, 23, and 31 
    
|  Set  | Block 0 | Block 1 | Block 2 | Block 3 |
| ----- | ------- | ------- | ------- | ------- |
| Set 0 |    0    |    8    |    16    |    24    |
| Set 1 |    0    |    8    |    16    |    24    |
| Set 2 |    0    |    8    |    16    |    24    |
| Set 3 |    0    |    8    |    16    |    24    |
| Set 4 |    0    |    8    |    16    |    24    |
| Set 5 |    0    |    8    |    16    |    24    |
| Set 6 |    0    |    8    |    16    |    24    |
| Set 7 |    0    |    8    |    16    |    24    |

    *Note that these numbers are listed in sequential order from Block 0, 1, 2, and 3 respectively for each set

    Now we will be inserting MM Blocks 32 to 63 in the cache. However, since it is currently full, we will have to make use of the MRU replacement algorithm. 
    To keep things simple, we will first observe Set 0 wherein we are attempting to insert 32. 
    Since Block 3 in Set 0 was the most recently used block, we will insert 32 into it. 
    The same goes for Set 1 wherein 33 will be inserted into Block 3 since that was the most recently used block in Set 1. 
    Thus, after inserting MM blocks 33 to 39, the cache will be:

    Set 0 will contain MM Blocks 0, 8, 16, and 32
    Set 1 will contain MM Blocks 1, 9, 17, and 33 
    Set 2 will contain MM Blocks 2, 10, 18, and 34 
    Set 3 will contain MM Blocks 3, 11, 19, and 35 
    Set 4 will contain MM Blocks 4, 12, 20, and 36 
    Set 5 will contain MM Blocks 5, 13, 21, and 37 
    Set 6 will contain MM Blocks 6, 14, 22, and 38 
    Set 7 will contain MM Blocks 7, 15, 23, and 39 
    *Note that these numbers are listed in sequential order from Block 0, 1, 2, and 3 respectively for each set

    Essentially, the pattern for this first iteration will always replace Block 3 since that will be the most recently used. 
    If we insert MM Blocks 40 to 63, the cache snapshot after the first iteration will be:
    
    Set 0 will contain MM Blocks 0, 8, 16, and 56
    Set 1 will contain MM Blocks 1, 9, 17, and 57 
    Set 2 will contain MM Blocks 2, 10, 18, and 58 
    Set 3 will contain MM Blocks 3, 11, 19, and 59 
    Set 4 will contain MM Blocks 4, 12, 20, and 60 
    Set 5 will contain MM Blocks 5, 13, 21, and 61 
    Set 6 will contain MM Blocks 6, 14, 22, and 62 
    Set 7 will contain MM Blocks 7, 15, 23, and 63 
    *Note that these numbers are listed in sequential order from Block 0, 1, 2, and 3 respectively for each set

    Going to the second iteration, we will insert MM Blocks 0 to 23 first, which will all result in hits since they are still in the cache. 
    However, when we try to insert 24, it results in a miss since 24 is no longer in the cache. 
    The most recently used block in Set 0 is Block 2 which contains 16. 
    Thus, we replace 16 with MM Block 24. This pattern continues until MM Block 31 wherein the cache snapshot will be:
    
    Set 0 will contain MM Blocks 0, 8, 24, and 56
    Set 1 will contain MM Blocks 1, 9, 25, and 57 
    Set 2 will contain MM Blocks 2, 10, 26, and 58 
    Set 3 will contain MM Blocks 3, 11, 27, and 59 
    Set 4 will contain MM Blocks 4, 12, 28, and 60 
    Set 5 will contain MM Blocks 5, 13, 29, and 61 
    Set 6 will contain MM Blocks 6, 14, 30, and 62 
    Set 7 will contain MM Blocks 7, 15, 31, and 63 
    *Note that these numbers are listed in sequential order from Block 0, 1, 2, and 3 respectively for each set

    The remaining MM Blocks from 32 to 55 will follow the same pattern. 
    In this second iteration, Block 2 of each set will constantly be replaced so the cache snapshot after inserting MM Block 55 is:

    Set 0 will contain MM Blocks 0, 8, 48, and 56
    Set 1 will contain MM Blocks 1, 9, 49, and 57 
    Set 2 will contain MM Blocks 2, 10, 50, and 58 
    Set 3 will contain MM Blocks 3, 11, 51, and 59 
    Set 4 will contain MM Blocks 4, 12, 52, and 60 
    Set 5 will contain MM Blocks 5, 13, 53, and 61 
    Set 6 will contain MM Blocks 6, 14, 54, and 62 
    Set 7 will contain MM Blocks 7, 15, 55, and 63 
    *Note that these numbers are listed in sequential order from Block 0, 1, 2, and 3 respectively for each set

    Then when we try to insert MM Blocks 56 to 63, they will all result in hits because they are all still in the cache. 
    Thus, the snapshot above is the final snapshot for the second iteration.

    For the third iteration, we insert MM Blocks 0 to 15 first, which will all result in hits since they are still in the cache. 
    However, when we try to insert 16, it results in a miss since 16 is no longer in the cache. 
    The most recently used block in Set 0 is Block 1 which contains 8.
    Thus, we replace 8 with MM Block 16. This pattern continues until MM Block 23 wherein the cache snapshot will be:

    Set 0 will contain MM Blocks 0, 16, 48, and 56
    Set 1 will contain MM Blocks 1, 17, 49, and 57 
    Set 2 will contain MM Blocks 2, 18, 50, and 58 
    Set 3 will contain MM Blocks 3, 19, 51, and 59 
    Set 4 will contain MM Blocks 4, 20, 52, and 60 
    Set 5 will contain MM Blocks 5, 21, 53, and 61 
    Set 6 will contain MM Blocks 6, 22, 54, and 62 
    Set 7 will contain MM Blocks 7, 23, 55, and 63 
    *Note that these numbers are listed in sequential order from Block 0, 1, 2, and 3 respectively for each set

    The remaining MM Blocks from 24 to 47 will follow the same pattern. 
    In this third iteration, Block 1 of each set will constantly be replaced so the cache snapshot after inserting MM Block 47 is:

    Set 0 will contain MM Blocks 0, 40, 48, and 56
    Set 1 will contain MM Blocks 1, 41, 49, and 57 
    Set 2 will contain MM Blocks 2, 42, 50, and 58 
    Set 3 will contain MM Blocks 3, 43, 51, and 59 
    Set 4 will contain MM Blocks 4, 44, 52, and 60 
    Set 5 will contain MM Blocks 5, 45, 53, and 61 
    Set 6 will contain MM Blocks 6, 46, 54, and 62 
    Set 7 will contain MM Blocks 7, 47, 55, and 63 
    *Note that these numbers are listed in sequential order from Block 0, 1, 2, and 3 respectively for each set

    Then when we try to insert MM Blocks 48 to 63, they will all result in hits because they are all still in the cache. 
    Thus, the snapshot above is the final snapshot for the third iteration.

    For the last iteration, we insert MM Blocks 0 to 7 first, which will all result in hits since they are still in the cache. 
    However, when we try to insert 8, it results in a miss since 8 is no longer in the cache. 
    The most recently used block in Set 0 is Block 0 which contains 0. 
    Thus, we replace 0 with MM Block 8. This pattern continues until MM Block 15 wherein the cache snapshot will be:

    Set 0 will contain MM Blocks 8, 40, 48, and 56
    Set 1 will contain MM Blocks 9, 41, 49, and 57 
    Set 2 will contain MM Blocks 10, 42, 50, and 58 
    Set 3 will contain MM Blocks 11, 43, 51, and 59 
    Set 4 will contain MM Blocks 12, 44, 52, and 60 
    Set 5 will contain MM Blocks 13, 45, 53, and 61 
    Set 6 will contain MM Blocks 14, 46, 54, and 62 
    Set 7 will contain MM Blocks 15, 47, 55, and 63 
    *Note that these numbers are listed in sequential order from Block 0, 1, 2, and 3 respectively for each set

    The remaining MM Blocks from 16 to 39 will follow the same pattern. 
    In this fourth iteration, Block 0 of each set will constantly be replaced so the cache snapshot after inserting MM Block 39 is:

    Set 0 will contain MM Blocks 32, 40, 48, and 56
    Set 1 will contain MM Blocks 33, 41, 49, and 57 
    Set 2 will contain MM Blocks 34, 42, 50, and 58 
    Set 3 will contain MM Blocks 35, 43, 51, and 59 
    Set 4 will contain MM Blocks 36, 44, 52, and 60 
    Set 5 will contain MM Blocks 37, 45, 53, and 61 
    Set 6 will contain MM Blocks 38, 46, 54, and 62 
    Set 7 will contain MM Blocks 39, 47, 55, and 63 
    *Note that these numbers are listed in sequential order from Block 0, 1, 2, and 3 respectively for each set

    Then when we try to insert MM Blocks 40 to 63, they will all result in hits because they are all still in the cache. 
    Thus, the snapshot above is the final snapshot of this test case.
    
`b.) Random sequence: containing 4n blocks.`

`c.) Mid-repeat blocks: Start at block 0, repeat the sequence in the middle two times up to n-1 blocks, after which continue up to 2n. Then, repeat the sequence four times. Example: if n=8, sequence=0, 1,2,3,4,5,6, 1,2,3,4,5,6, 7,8,9,10,11,12,13,14,15 {4x}`
