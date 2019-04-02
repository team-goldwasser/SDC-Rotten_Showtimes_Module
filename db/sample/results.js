//                                                            QUERY PLAN                                                            
// ---------------------------------------------------------------------------------------------------------------------------------
//  Limit  (cost=882.00..882.00 rows=1 width=96) (actual time=18.907..18.910 rows=1 loops=1)
//    ->  Sort  (cost=882.00..944.50 rows=25000 width=96) (actual time=18.905..18.906 rows=1 loops=1)
//          Sort Key: (abs((zip - '94112'::bigint)))
//          Sort Method: top-N heapsort  Memory: 25kB
//          ->  Seq Scan on theaters theater  (cost=0.00..757.00 rows=25000 width=96) (actual time=0.044..9.844 rows=25000 loops=1)
//  Planning Time: 0.804 ms
//  Execution Time: 19.016 ms
// (7 rows)

