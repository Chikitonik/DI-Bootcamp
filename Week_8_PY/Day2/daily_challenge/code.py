# Instructions
# Given a “Matrix” string:

#     7ii
#     Tsx
#     h%?
#     i #
#     sM
#     $a
#     #t%
#     ^r!


# The matrix is a grid of strings (alphanumeric characters and spaces) with a hidden message in it.
# A grid means that you could potentially break it into rows and columns, like here:

# 7	i	3
# T	s	i
# h	%	x
# i		#
# s	M
# $	a
# #	t	%
# ^	r	!


# Matrix: A matrix is a two-dimensional array. It is a grid of numbers arranged in rows and columns.


# To decrypt the matrix, Neo reads each column from top to bottom, starting from the leftmost column, selecting only the alpha characters and connecting them. Then he replaces every group of symbols between two alpha characters by a space.

# Using his technique, try to decode this matrix.

# Hints:
# Use
# ● lists for storing data
# ● Loops for going through the data
# ● if/else statements to check the data
# ● String for the output of the secret message

# Hint (if needed) : Look at the remote learning “Matrix” videos

matrix = '7ii---Tsx---h%?---i #---sM ---$a ---#t%---^r!'
matrix_list = matrix.split('---')
solution = ''
for n in range(3):
    for i in range(len(matrix_list)):
        if matrix_list[i][n].isalnum() and not matrix_list[i][n].isdigit():
            solution += matrix_list[i][n]
solution = ' '.join(solution)
print(solution)
