﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tiles {
    class Tile {
        // This class is an abstract of a tile that is placed on a floor. 
        // The spaces in the tile is represented as 0 for an empty space and a capital letter for a filled location.

        public int height;
        public int width;
        public char[,] block;
        public int complexity;

        public Tile() {}

        // standard constructor
        public Tile(char[,] b) {
            block = b;
            height = block.GetLength(0);
            width = block.GetLength(1);
            computeComplexity();
        }

        // copy constructor
        public Tile(Tile copy) {
            height = copy.height;
            width = copy.width;
            block = copy.block;
            complexity = copy.complexity;
        }

        public void rotate() { // clockwise 90 degrees
            //flip the values of columns and rows
            int oldColumnNum = width;
            int oldRowNum = height;
            int newRowNum = oldColumnNum;
            int newColumnNum = oldRowNum;
            char[,] oldBlock = block;
            block = new char[newRowNum, newColumnNum];
            //rearrange the letter locations for the rotation
            //start with first row, work across, then down to next row
            for (int i = 0; i<newRowNum; i++) //rows
            {
                for (int j = 0; j<newColumnNum; j++) //columns
                {
                    block[i, j] = oldBlock[oldRowNum - 1 - j, i];
                }
            }
            width = newColumnNum;
            height = newRowNum;
        }
        
        public void flipVertical() {
            //number of rows/columns will remain the same
            //keep track of previous block arrangment
            char[,] oldBlock = block;
            block = new char[height, width];
            for (int i = 0; i<height; i++) //rows
            {
                for (int j = 0; j<width; j++) //columns
                {
                    //row is the same, columns will switch
                    block[i, j] = oldBlock[i, width - 1 - j];
                }
            }
        }

        public void flipHorizontal() { // flip about the horizontal axis
            //number of rows/columns will remain the same
            //keep track of previous block arrangment
            char[,] oldBlock = block;
            block = new char[height, width];
            for (int i = 0; i < height; i++) //rows
            {
                for (int j = 0; j < width; j++) //columns
                {
                    //row will switch, columns the same
                    block[i, j] = oldBlock[height-1-i, j];
                }
            }
        }

        public void print() { // print the contents of the tile
            for (int i = 0; i < height; i++) {
                String str = "";

                for (int j = 0; j < width; j++) {
                    str += block[i, j] + " ";
                }

                System.Console.WriteLine(str);
            }
        }

        // Compute some sort of complexity heuristic for each tiles.
        // More complex tiles can be placed in fewer locations and therefore should be placed early for an optimized solution.
        // In this case, the larger the tile, the less places it can be placed.
        void computeComplexity() { 
            complexity = width * height;
        }
    }
}
