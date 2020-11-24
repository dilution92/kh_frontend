<%@page import="repository.TodoRepository"%>
<%@page import="domain.Todo"%>
<%@ page language="java" contentType="text/html; UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
	request.setCharacterEncoding("UTF-8");
	String userId = request.getParameter("userid");
	String whatTodo = request.getParameter("whattodo");
	
	final Todo todo = new Todo(whatTodo, userId);
	TodoRepository.getInstance().saveTodo(todo);
	response.sendRedirect("index.jsp");
%>
<%= userId %><br/>
<%= whatTodo %><br/>
</body>
</html>