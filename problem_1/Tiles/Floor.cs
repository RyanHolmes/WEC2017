using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tiles {
    class Floor {
        // The 10 by 6 grid that tiles are placed on.
        // Like tiles, the spaces in the floor is represented as 0 for an empty space and a capital letter for a filled location.

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

        // Place a tile on the floor. Iteratively check for new locations where the block could be placed.
        public bool placeTile(Tile tile) {
            bool tilePlaced = false;

            for (int i = 0; i < height; i++) {
                for (int j = 0; j < width; j++) {
                    if (doesTileFit(tile, i, j)) {
                        addTile(tile, i, j);
                        tilePlaced = true;
                    }
                }
            }

            return tilePlaced;
        }

        // check if a tile will fit in a location that isn't already occupied by a tile
        bool doesTileFit(Tile tile, int i, int j) {
            for (int k = 0; k < tile.height;) {
                for (int l = 0; l < tile.width; l++) {
                    if (grid[i + k, j + l] != '0' && tile.block[k, l] != '0') { // non-zero characters are filled parts of the tile
                        return false;
                    }
                }
            }

            return true;
        }
        
        // Search for 1 by 1 holes. If these exist, reset prematurely.
        public bool searchForHoles() {
            for (int i = 1; i < height; i++) { // start at one because top row can't have holes
                for (int j = 0; j < width; j++) {
                    if (grid[i, j] == '0') {
                        if (grid[i, j - 1] != '0' && grid[i, j + 1] != '0' && grid[i - 1, j] != '0' && grid[i + 1, j] != '0') {
                            return true;
                        }
                    }
                }
            }

            return false;
        }

        // reset grid to initial state of emptiness
        public void reset() {
            grid = originalGrid;
        }

        public bool checkSuccess() {
            return true;
        }

        // Write the tile contents on to the grid
        void addTile(Tile tile, int i, int j) {
            for (int k = 0; k < tile.height; ) {
                for (int l = 0; l < tile.width; l++) {
                    grid[i + k, j + l] = tile.block[k, l];
                }
            }
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
