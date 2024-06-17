from utils import *
# User management should come later.

def create_user(google_id: str, email: str) -> bool:

    result = exec_get_one('SELECT COUNT(*) FROM user WHERE email = %s', [email])

    if result > 0:
        return False
    
    exec_commit('INSERT INTO user email')