from anagram_checker import AnagramChecker


def main():
    anagram_checker = AnagramChecker()

    while True:
        choice = input('Choose an option:\n1. Input a word\n2. Exit\n')

        if choice == '1':
            user_word = input('Tap a word: ').strip()
            if not user_word:
                print('Error: Tap a word')
                continue

            if len(user_word.split()) > 1:
                print('Error: Only a single word.')
                continue

            if not user_word.isalpha():
                print('Error: Only letters.')
                continue

            user_word = user_word.lower()
            anagrams = anagram_checker.get_anagrams(user_word)
            print('Anagrams:', anagrams)
            break

        elif choice == '2':
            break

        else:
            print('Invalid choice')


main()
