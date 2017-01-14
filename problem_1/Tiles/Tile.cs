using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tiles {
    class Tile {

        public int height;
        public int width;
        public char[,] block;
        public int complexity;

        public Tile() {}

        public Tile(char[,] b) {
            block = b;
            height = block.GetLength(0);
            width = block.GetLength(1);
            computeComplexity();
        }

        public Tile(Tile copy) {
            height = copy.height;
            width = copy.width;
            block = copy.block;
            complexity = copy.complexity;
        }

        public void rotate() { // clockwise 90 degrees

        }

        public void flipVertical() { // flip about the vertical axis

        }

        public void flipHorizontal() { // flip about the horizontal axis

        }

        public void print() {
            for (int y = 0; y < height; y++) {
                String str = "";

                for (int x = 0; x < width; x++) {
                    str += block[y, x] + " ";
                }

                System.Console.WriteLine(str);
            }
        }

        void computeComplexity() { // the larger the tile the less places it can be placed
            complexity = width * height;
        }
    }
}
