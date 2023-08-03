# What You Will Create
# Create a TicTacToe game in python, where two users can play together.

# tic tac toe


# Instructions
# The game is played on a grid that’s 3 squares by 3 squares.
# Players take turns putting their marks (O or X) in empty squares.
# The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
# When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.


# Hint
# To do this project, you basically need to create four functions:

# display_board() – To display the Tic Tac Toe board (GUI).
# player_input(player) – To get the position from the player.
# check_win() – To check whether there is a winner or not.
# play() – The main function, which calls all the functions created above.
# Note: The 4 functions above are just an example. You can implement many more helper functions or choose a completely different appoach if you want.
def display_board(all_turns):
    board_line = '***************'
    clean_line_1 = '*  '+ all_turns[0] +' | '+ all_turns[1] +' | '+ all_turns[2] +'  *'
    clean_line_2 = '*  '+ all_turns[3] +' | '+ all_turns[4] +' | '+ all_turns[5] +'  *'
    clean_line_3 = '*  '+ all_turns[6] +' | '+ all_turns[7] +' | '+ all_turns[8] +'  *'

    line = '* ---|---|--- *'
    board = [board_line, clean_line_1, line, clean_line_2, line, clean_line_3, board_line]
    print('\n'.join(map(str, board)))
    return None
def player_input(player, all_turns):
    print(f'Player {player} turn')
    good_move = False
    while not good_move:
        turn = input('Input row/col: ') +'/'+player
        if all_turns[(int(turn[0])-1 )* 3 + int(turn[2])-1] == ' ':
            good_move = True
        else:
            print('This sell is not empty, try another')
    return turn
def check_win(all_turns):
    for i in range(3):
        if all_turns[i] == all_turns[i+1] == all_turns[i+2] != ' ':
            return True
        if all_turns[i] == all_turns[i+3] == all_turns[i+6] != ' ':
            return True
        if all_turns[0] == all_turns[4] == all_turns[8] != ' ':
            return True
        if all_turns[2] == all_turns[4] == all_turns[6] != ' ':
            return True
    return False
def play():
    is_end_game = False
    all_turns = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    while not is_end_game:
        display_board(all_turns)
        is_end_game = check_win(all_turns)
        if is_end_game:
            break
        turn = player_input('X', all_turns)
        all_turns[(int(turn[0])-1 )* 3 + int(turn[2])-1] = turn[4]
        display_board(all_turns)
        is_end_game = check_win(all_turns)
        if is_end_game:
            break
        turn = player_input('O', all_turns)
        all_turns[(int(turn[0])-1 )* 3 + int(turn[2])-1] = turn[4]
    print(f'Player {turn[4]} win')
    return None
play()