using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tiles {
    class Program {
        static List<Tile> originalTiles = new List<Tile>(); // the initial state of all tiles
        static List<Tile> availibleTiles = new List<Tile>(); // the state of all times currently in use (starts as an 
        static Tile currentTile = new Tile(); // the current tile being added to the floor
        static Floor floor; // the 10 by 6 grid that tiles are added to
        static Random random = new Random();

        static void Main(string[] args) {
            System.Console.WriteLine("Start");
            
            init();
            reset();

            originalTiles[0].print();
            originalTiles[0].flipVertical();
            originalTiles[0].print();
            originalTiles[0].rotate();
            originalTiles[0].print();
            originalTiles[0].flipHorizontal();
            originalTiles[0].print();

            originalTiles[2].print();
            originalTiles[2].flipVertical();
            originalTiles[2].print();
            originalTiles[2].rotate();
            originalTiles[2].print();
            originalTiles[2].flipHorizontal();
            originalTiles[2].print();

            //run();

            System.Console.ReadKey();
        }

        // This function is the core of the program.
        // Repeatedly run until a solution is found.
        // If at any point the placement of tiles on the floor don't work, the floor is reset and a new solution is attempted.
        // If a solution is found, it is printed to the console.
        static void run() {
            while(true) {
                bool tilePlaced = false;

                for (int i = 0; i < originalTiles.Count; i++) {
                    currentTile = nextTile();
                    tilePlaced = floor.placeTile(currentTile);

                    if (!tilePlaced) {
                        System.Console.WriteLine("Reset needed");
                        reset();
                        break;
                    }
                }

                if (floor.checkSuccess()) {
                    break;
                } else {
                    System.Console.WriteLine("Attempt failed");
                    reset();
                }
            }

            System.Console.WriteLine("Success");
            floor.print();
        }
        
        // choose the next tile to be placed on the floor.
        // since tiles are sorted by complexity, more complex blocks are placed first.
        static Tile nextTile() {
            //int randIndex = random.Next(availibleTiles.Count);

            Tile tile = availibleTiles[0];
            availibleTiles.RemoveAt(0);
            return tile;
        }

        // Reset the floor and the set of tiles to their original state
        static void reset() {
            availibleTiles = new List<Tile>(originalTiles);
            floor.reset();
        }

       static void init() {
            // ALL BLOCKS
            char[,] A = new char[3, 2] {
                        {'A', 'A'},
                        {'A', '0'},
                        {'A', '0'}
                    };

            char[,] B = new char[3, 2] {
                        {'0', 'B'},
                        {'B', 'B'},
                        {'B', 'B'}
                    };

            char[,] C = new char[3, 4] {
                        {'0', 'C', '0', '0'},
                        {'C', 'C', 'C', 'C'},
                        {'0', 'C', '0', '0'}
                    };

            char[,] D = new char[3, 3] {
                        {'0', '0', 'D'},
                        {'D', 'D', 'C'},
                        {'0', '0', 'D'}
                    };


            char[,] E = new char[2, 2] {
                        {'0', 'E'},
                        {'E', 'E'},
                    };

            char[,] F = new char[3, 4] {
                        {'F', 'F', '0', '0'},
                        {'0', 'F', '0', '0'},
                        {'0', 'F', 'F', 'F'}
                    };

            char[,] G = new char[3, 4] {
                        {'G', '0', '0', '0'},
                        {'G', '0', '0', '0'},
                        {'G', 'G', 'G', 'G'}
                    };

            char[,] H = new char[1, 2] {
                        {'H', 'H'}
                    };

            char[,] I = new char[4, 3] {
                        {'I', 'I', 'I'},
                        {'0', '0', 'I'},
                        {'0', 'I', 'I'},
                        {'0', 'I', '0'}
                    };

            char[,] J = new char[3, 1] {
                        {'J'},
                        {'J'},
                        {'J'}
                    };

            char[,] K = new char[4, 2] {
                        {'0', 'K'},
                        {'K', 'K'},
                        {'K', 'K'},
                        {'K', '0'}
                    };

            char[,] L = new char[4, 2] {
                        {'0', 'L'},
                        {'L', 'L'},
                        {'L', 'L'},
                        {'L', 'L'}
                    };

            originalTiles.Add(new Tiles.Tile(A));
            originalTiles.Add(new Tiles.Tile(B));
            originalTiles.Add(new Tiles.Tile(C));
            originalTiles.Add(new Tiles.Tile(D));
            originalTiles.Add(new Tiles.Tile(E));
            originalTiles.Add(new Tiles.Tile(F));
            originalTiles.Add(new Tiles.Tile(G));
            originalTiles.Add(new Tiles.Tile(H));
            originalTiles.Add(new Tiles.Tile(I));
            originalTiles.Add(new Tiles.Tile(J));
            originalTiles.Add(new Tiles.Tile(K));
            originalTiles.Add(new Tiles.Tile(L));


            // Sort the tiles by their complexity
            originalTiles = originalTiles.OrderByDescending(t => t.complexity).ToList();

            // FLOOR

            char[,] initialFloor = new char[10, 6] {
                        {'0', '0', '0', '0', '0', '0'},
                        {'0', '0', '0', '0', '0', '0'},
                        {'0', '0', '0', '0', '0', '0'},
                        {'0', '0', '0', '0', '0', '0'},
                        {'0', '0', '0', '0', '0', '0'},
                        {'0', '0', '0', '0', '0', '0'},
                        {'0', '0', '0', '0', '0', '0'},
                        {'0', '0', '0', '0', '0', '0'},
                        {'0', '0', '0', '0', '0', '0'},
                        {'0', '0', '0', '0', '0', '0'}
                    };

            floor = new Floor(initialFloor);
        }

    }
}
