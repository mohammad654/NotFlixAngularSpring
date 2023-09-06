package com.Full.Full.Stack.App.Repository;

import com.Full.Full.Stack.App.entity.MovieEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<MovieEntity, Long> {
}
