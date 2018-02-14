BEGIN
DECLARE cmd TEXT;
DECLARE result CHAR(255);
SET cmd = CONCAT('/opt/call_mysql_audit.sh ',p8, ' ' ,p1, ' ' ,p2, ' ', p3, ' ' ,p4, ' ' ,p5, ' ' ,p6, ' ',p7);
SET result = sys_eval(cmd);
END
