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
                        {'A', 'A'},
                        {'A', '0'}
                    };

            originalTiles.Add(new Tiles.Tile(A));
        }

    }
}
