1.Procedures:</br>
a. Unzip the zipped file named "Website".
b. Open the "StudentInfo.html" file using any browser(I've tested with "Google chrome" and "Opera").
c. After opening the .html file, a page will appear containing informations about students.
d. You can move your cursor on desired row and the row will be highlighted.



2. How to modify information:
a. To modify informations shown on the .html page, you need to open "Script.js" file with any text editor.
b. In "Script.js" file, you will find a controller named "myController".
c. Inside the controller function you will find an object called "students".



2.1 How to add information:
a. To add an element at the bottom use "$scope.students.push('informations you want to add')"
statement.
b. To add an element at the top use "$scope.students.unshift('informations you want to add')"statement.

2.2 How to delete information:
a. To delete an element from top use "$scope.students.shift()" statement below this "$scope.students = students;".
b. To delete an element from bottom use "$scope.students.pop()" statement below this "$scope.students = students;".

2.3 How to update information:
a. To update a particular element use "$scope.students[index_to_be_updated].column_to_be_updated = "desired_value".
b. To update an entire row, follow the procedure shown below:
	ObjectName = {studentId:"0605032",firstName : "Hasan",lastName : "Murad",
	gender : "Male",section : "A",department : "CSE",university:"BUET"}; //you can use any information. The given one is an example.

	$scope.students[desired_index] = ObjectName; 

All these statement should be written inside the controller function "myController" and below "$scope.students = students" statement.



