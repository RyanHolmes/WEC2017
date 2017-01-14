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
        }

        public Tile(Tile copy) {

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
                    //newBlock [0,0] = oldBlock[2,0] -> last row, first column -- j = 0
                    //newBlock [0,1] = oldBlock[1,0] -> second last row, first column -- j = 1
                    //newBlock [0,2] = oldBlock [0,0] -> first row, first column -- j = 2
                    block[i, j] = oldBlock[oldColumnNum - 1 - j, i];
                }
            }
        }
        
        public void flipVertical() {
            //number of rows/columns will remain the same
            //keep track of previous block arrangment
            char[,] oldBlock = block;
            for (int i = 0; i<height; i++) //rows
            {
                for (int j = 0; j<width; j++) //columns
                {

                }
            }
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

        void computeComplexity() {
            complexity = 0;
        }
    }
}
