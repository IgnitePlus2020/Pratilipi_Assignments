package com.example.cassandraspringboot.dao;

import com.example.cassandraspringboot.model.User;
import org.springframework.data.cassandra.repository.CassandraRepository;

public interface UserDAO extends CassandraRepository<User, Integer> {


}