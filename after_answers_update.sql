BEGIN 
INSERT INTO audit_answers SET action_performed  = 'Update a answer', 
answers_id       =  new.Id,
answers_guid       =  new.Guid, 
answers_time       =  new.Time, 
answers_value      =  new.Value, 
hash = SHA2(SHA2(CONCAT(new.Id, new.Guid, new.Time, new.Value, new.Created),256),256);
CALL push_message('answers','Id',new.Id,SHA2(SHA2(CONCAT(old.Id, old.Guid, old.Time, old.Value, old.Created),256),256),SHA2(SHA2(CONCAT(new.Id, new.Guid, new.Time, new.Value,new.Created),256),256),'update',UNIX_TIMESTAMP(NOW()),'digotatortestdb'); 
END
