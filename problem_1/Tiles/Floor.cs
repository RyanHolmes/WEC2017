using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tiles {
    class Floor {
        public int height;
        public int width;
        public char[][] grid;
        char[][] originalGrid;

        public Floor(char[][] g) {
            originalGrid = g;
            reset();
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

        }
    }
}
