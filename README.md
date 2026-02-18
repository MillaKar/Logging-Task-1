# Logging Library Implementation  

## Description  

This project shows how to implement logging in a Node.js application using Winston logging library.  

The applicatin captures three different types of log messages (info, warn and error) and outputs them to the console, log file and error log file. (Timestamps and output logs in JSON format.)  

---

## How to run  

### 1. Install dependencies  
```
npm install  
```
### 2. Run the application  
```
node src/main.js  
```

## Output  

When running the application:  

### Console Output  

Log messages printed in JSON format including timestamps and log levels.  

Example:  

```json  
{  
  "level": "info",  
  "message": "This is an informational message.",  
  "timestamp": "2026-02-18T10:00:00.000Z"  
}  
```  

### Log Files Created  
The application generates the following files inside the `logs/` directory:  
- `logs/combined.log` → contains all log messages  
- `logs/error.log` → contains only error-level log messages  