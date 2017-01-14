using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tiles {
    class Program {
        List<Tile> originalTiles = new List<Tile>();
        Tile currentTile = new Tile();

        static void Main(string[] args) {
            System.Console.WriteLine("Hello world!");
            System.Console.ReadKey();
        }

       void nextTile() {
            
        }

        void init() {
            char[,] A = new char[3,2] {
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
        }

    }
}
