# Finding the number of occurances from a text link

## Domain pointed to cloud server using route 53

[theinvigilator.ga](http://theinvigilator.ga "live test taking system")

## Components

* Server - app.js

	~ Request module used to get the data from the remote url
	~ Regular expression used to match all words including ' and -
	~ Compare the words in sequence from the array of the words
	  and check how may times they occur in the whole array.
	~ Donot compare if word has already been compared before.
	~ Sort the array and slice by the value of N.

## ScreenShots

![Screenshot](screenshot.png)

## Built With

* Bootstrap
* nodejs
* Sublime Text

## Versioning

The Invigilator version 1.0

## Authors

* **Vivek Shankar** 