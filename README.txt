This is a simple non-blocking example of routing and request handling.

Each request function is passed the 'response' object which it internally manipulates.  The start route makes use of the child_process exec function to do a simple search in a non-blocking way so the that the server can respond all async and shit.