/*
As JS is single threaded language, means can do only once thing at a time.
This create a problem in case any function is blocking in nature, means taking long time, 
stop the whole code down that instruction from running.
As a optimisation - 
When Blocking function are kept in different data struucture like callback queue, micro task queue etc.
And normal non-blocking function are kept on call stack.
Event loop keep checking once the call stack empty means completely execute the normal funciton, 
assign the blocking funciton from callack queue to call stack to run.
*/

/*
So JS runntime is itself singlethreaed but not all other component
*/
