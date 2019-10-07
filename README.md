# simplest-mvc-app
A very simple example of MVC architecture

This app uses MVC architecture to display counting in a button.
The Model has the data which the controller collects and gives to the view. 
The view then displays that data and also generates data which is collected by the controller and relayed to the model.

The Top Points
1. The model stores data and has methods for altering data
2. The view displays data and has event listeners which generate data
3. The controller connects the model to the view. It's the channel which the model uses to send data to the view. 
It's also the channel which the view sends new data to the model.
