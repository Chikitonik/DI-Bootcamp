# Part 2
# Create a file called menu_editor.py , which will have the following functions:
# show_user_menu() - this function should display the program menu (not the restaurant menu!), and ask the user to :
# View an Item (V)
# Add an Item (A)
# Delete an Item (D)
# Update an Item (U)
# Show the Menu (S)
# Call the appropriate function that matches the user’s input.

# add_item_to_menu() - this function should ask the user to input the item’s name and price. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was added successfully print a message which states: item was added successfully.

# remove_item_from_menu()- this function should ask the user to input the name of the item they want to remove from the restaurant’s menu. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was deleted successfully – print a message to let the user know this was completed.
# If not – print a message which states that there was an error.

# update_item_from_menu()- this function should ask the user to input the name and price of the item they want to update from the restaurant’s menu, as well as to input the name and price they want to change them with. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was updated successfully – print a message to let the user know this was completed.
# If not – print a message which states that there was an error.

# show_restaurant_menu() - print the restaurant’s menu.

# When the user chooses to exit the program, display the restaurant menu and exit the program.
from menu_manager import MenuManager
from menu_item import MenuItem


def show_user_menu():
    variant = input(
        'View an Item (V)\nAdd an Item (A)\nDelete an Item (D)\nUpdate an Item (U)\nShow the Menu (S)\n')
    if variant == 'V':
        item_name = input('Tap item name: ')
        menu_manager = MenuManager()
        item = menu_manager.get_by_name(item_name)
        return item
    if variant == 'A':
        item_name = input('Tap item name: ')
        item_price = input('Tap item price: ')
        menu_item = MenuItem(item_name, item_price)
        menu_item.save()
        return 'item was added successfully'
    if variant == 'D':
        item_name = input('Tap item name: ')
        menu_manager = MenuManager()
        item = menu_manager.get_by_name(item_name)
        try:
            item.delete()
            return 'item was deleted successfully'
        except:
            print("Something gone wrong")
    if variant == 'U':
        item_name = input('Tap item name: ')
        menu_manager = MenuManager()
        item = menu_manager.get_by_name(item_name)
        item_new_name = input('Tap NEW item name: ')
        item_new_price = input('Tap NEW item price: ')
        try:
            item.update(item_new_name, item_new_price)
            return 'item was updated successfully'
        except:
            print("Something gone wrong")
    if variant == 'S':
        menu_manager = MenuManager()
        items = menu_manager.all_items()
        for item in items:
            print(item)
    else:
        print('Incorrect variant')


show_user_menu()
