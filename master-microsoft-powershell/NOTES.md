# Master Microsoft Power Shell

- Udemy
- Instructor Tom Meservy
- Completed

--- 

```
ipconfig
dir
cls
$PSVersionTable
```

### commands
- **Get-Member** - describes properties and methods

### operators
- **eq** - equal
- **ne** - not equal
- **gt** - greater than
- **lt** - less than
- **like** - to use wild cards when comparing
- **match** - to check for string in a string

- Put c in front of operator to consider case for exact match. For example **-ceq**

### Commandlets
- **get-member**
- **get-process**
- **get-service**
- **write-host <string>** - write string to console
- **get-alias** (show an aliased command; resolve all aliases down to the base command)
- **set-alias**

### **help <command> -online**   (add the -online parameter to get help in browser)

### ARRAYS
- $a = @("a","b","c")

### HASH TABLES
- $a = @{"a","b","c")

### foreach {...}

- **format-wide**
- **format-list**
- **format-table**
	- **-property** (filter by property/properties)
	- **-autosize**  (adjust display)
	- **-groupby**
		
- **out-file** (save to a file)	
- **ConvertTo-HTML**
- **invoke-expression** (open file in appropriate program for processs)
- **export-csv**
- **import-csv**

- **Measure-Object**

- **sort -property**

- **Recurse**      - recurse a directory

### EXAMPLES
```
($names | sort -property pcthispanic -descending)[0].name
```
OR
```
$name | sort -property pcthispanic -descending | select -first 1
```
OR
```
$names | foreach{if($_.pcthispanic -gt $highest.pcthispanic){$highest=$_}}
$highest
```
	
### FUNCTION EXAMPLE (the return keyword is optional)
```
function Add-Numbers{
{
	param([int]$num1, [int]$num2)
	return $num1 + $num2
}	
```
OR
```
function Add-Numbers([int]$num1, [int]$num2)
{
	return $num1 + $num2
}
```

- **Add-Numbers 123 456**
- **Add-Numbers -num1 123 -num2 456**

- **1GB**   - constant

### EXAMPLE USING math .Net LIBRARY
```
function Get-DirInfo($dir)
{
	Get-ChildItem $dir -Recurse | Measure-Object - Property length -Sum
}

[math]::round((Get-DirInfo c:\temp).sum/1GB, 3)
```

### EXAMPLE OF SCRIPT WITH PARAMETERS (FirstScript.ps1)
```
#parameters
param([string]$dir="c:\")

#functions
function Get-DirInfo($dir)
{
	$results = Get-ChildItem $dir -Recurse | Measure-Object - Property length -Sum
	return [math]::round(($results).sum/1GB, 3)
}

#main processing
Get-DirInfo $dir
```
