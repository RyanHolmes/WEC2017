using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tiles {
    class Floor {
        public int height;
        public int width;
        public char[,] grid;
        char[,] originalGrid;

        public Floor(char[,] g) {
            originalGrid = g;
            reset();
            height = originalGrid.GetLength(0);
            width = originalGrid.GetLength(1);
        }

        public void placeTile(Tile tile) {

        }

        bool doesTileFit(Tile tile) {
            return true;
        }
        
        bool searchForHole() {
            return true;
        }

        public void reset() {
            grid = originalGrid;
        }

        public void print() {
            for (int y = 0; y < height; y++) {
                String str = "";

                for (int x = 0; x < width; x++) {
                    str += grid[y, x] + " ";
                }

                System.Console.WriteLine(str);
            }
        }
    }
}
