import psycopg2
from menu_item import MenuItem


class MenuManager():
    def __init__(self) -> None:
        self.database = "restaurant"
        self.user = "postgres"
        self.password = "postgres"

    def get_by_name(self, item_name):
        connection = None
        try:
            connection = psycopg2.connect(
                database=self.database,
                user=self.user,
                password=self.password
            )
            cursor = connection.cursor()
            select_query = "SELECT * FROM menu_items WHERE item_name = %s"
            cursor.execute(select_query, (item_name,))
            item = cursor.fetchone()
            if item:
                return MenuItem(item[1], item[2])
            else:
                return None
        except (Exception, psycopg2.Error) as error:
            print("Some error:", error)
        finally:
            if connection:
                cursor.close()
                connection.close()

    def all_items(self):
        connection = None
        try:
            connection = psycopg2.connect(
                database=self.database,
                user=self.user,
                password=self.password
            )
            cursor = connection.cursor()
            select_query = "SELECT * FROM menu_items"
            cursor.execute(select_query)
            items = cursor.fetchall()
            return [MenuItem(item[1], item[2]) for item in items]
        except (Exception, psycopg2.Error) as error:
            print("Some error:", error)
        finally:
            if connection:
                cursor.close()
                connection.close()
