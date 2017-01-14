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

        public bool placeTile(Tile tile) {
            return true;
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

        public bool checkSuccess() {
            return true;
        }

        public void print() {
            for (int i = 0; i < height; i++) {
                String str = "";

                for (int j = 0; j < width; j++) {
                    str += grid[i, j] + " ";
                }

                System.Console.WriteLine(str);
            }
        }
    }
}
