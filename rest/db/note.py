from utils import *
from collections import Array
import array
def create_note(user_id: int, title: str, tags: str) -> int:
    # TODO: user_id should be counted here. For now we ignore it.
    id = exec_get_one("INSERT INTO notes (user_id, tags) VALUES (%s, %s) RETURNING id", [user_id])
    if id is None:
        return -1
    
    return id