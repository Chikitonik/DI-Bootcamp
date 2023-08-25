# Exercise 1 : Restaurant Menu Manager
# Instructions
# Description: Create a restaurant menu management system for a manager. The program should allow the manager to view the menu, add an item and delete an item.


# PART 1
# In this exercise we will use PostgreSQL and Python.

# Create a new database and a new table in pgAdmin (or in psql). The table is named Menu_Items and contains the columns

# item_id : SERIAL PRIMARY KEY
# item_name : VARCHAR(30) NOT NULL
# item_price : SMALLINT DEFAULT 0

# In the file menu_item.py, create a new class called MenuItem, the attributes should be the name and price of each item.


# Create several methods (save, delete, update) these methods will allow a user to save, delete and update items from the Menu_Items table. The update method can update the name as well as the price of an item.

# In the file menu_manager.py, create a new class called MenuManager
# Create a Class Method called get_by_name that will return a single item from the Menu_Items table depending on it’s name, if an object is not found (there is no item matching the name in the get_by_name method) return None.

# Create a Class Method called all_items which will return a list of all the items from the Menu_Items table.


# Codebox:

# item = MenuItem('Burger', 35)
# item.save()
# item.delete()
# item.update('Veggie Burger', 37)
# item2 = MenuManager.get_by_name('Beef Stew')
# items = MenuManager.all()


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
import psycopg2


class MenuItem():
    def __init__(self, name, price) -> None:
        self.name = name
        self.price = price
        self.database = "restaurant"
        self.user = "postgres"
        self.password = "postgres"

    def __repr__(self) -> str:
        return f'name: {self.name} price: {self.price}'

    def save(self):
        connection = None
        try:
            connection = psycopg2.connect(
                database=self.database,
                user=self.user,
                password=self.password
            )
            cursor = connection.cursor()
            insert_query = "INSERT INTO menu_items (item_name, item_price) VALUES (%s, %s)"
            cursor.execute(insert_query, (self.name, self.price))
            connection.commit()
        except (Exception, psycopg2.Error) as error:
            print("Some error:", error)
        finally:
            if connection:
                cursor.close()
                connection.close()

    def delete(self):
        try:
            connection = psycopg2.connect(
                database=self.database,
                user=self.user,
                password=self.password
            )
            cursor = connection.cursor()
            delete_query = "DELETE FROM menu_items WHERE item_name = %s"
            cursor.execute(delete_query, (self.name,))
            connection.commit()
        except (Exception, psycopg2.Error) as error:
            print("Some error:", error)
        finally:
            if connection:
                cursor.close()
                connection.close()

    def update(self, new_name, new_price):
        try:
            connection = psycopg2.connect(
                database=self.database,
                user=self.user,
                password=self.password
            )
            cursor = connection.cursor()
            update_query = "UPDATE menu_items SET item_name = %s, item_price = %s WHERE item_name = %s"
            cursor.execute(update_query, (new_name, new_price, self.name))
            connection.commit()
        except (Exception, psycopg2.Error) as error:
            print("Some error:", error)
        finally:
            if connection:
                cursor.close()
                connection.close()
