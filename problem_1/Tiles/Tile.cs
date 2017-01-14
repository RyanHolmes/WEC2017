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

        public Tile() {

        }

        public Tile(char[,] b) {

        }

        public Tile(Tile copy) {

        }

        public void rotate() { // clockwise 90 degrees

        }

        public void flipVertical() {

        }

        public void flipHorizontal() {

        }

        public void print() {

        }

        void computeComplexity() {
            c = 0;
        }
    }
}
