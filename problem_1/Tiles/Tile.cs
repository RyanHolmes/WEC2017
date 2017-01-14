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
            complexity = 0;
        }
    }
}
