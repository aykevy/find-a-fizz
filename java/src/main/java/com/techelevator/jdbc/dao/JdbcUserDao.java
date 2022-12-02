package com.techelevator.jdbc.dao;

import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.List;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.techelevator.jdbc.model.User;
import org.springframework.web.bind.annotation.CrossOrigin;

@Service
@CrossOrigin
public class JdbcUserDao implements UserDao {

    private JdbcTemplate jdbcTemplate;

    public JdbcUserDao(JdbcTemplate jdbcTemplate)
    {
        this.jdbcTemplate = jdbcTemplate;
    }

    /* Find a user id based on given username. */
    @Override
    public int findIdByUsername(String username)
    {
        return jdbcTemplate.queryForObject("select user_id from users where username = ?", int.class, username);
    }

    /* Find a user based on given user id. */
	@Override
	public User getUserById(Long userId)
    {
		String sql = "SELECT * FROM users WHERE user_id = ?";
		SqlRowSet results = jdbcTemplate.queryForRowSet(sql, userId);
		if (results.next())
        {
			return mapRowToUser(results);
		}
        else
        {
			throw new RuntimeException("userId "+userId+" was not found.");
		}
	}

    /* Finds all users. */
    @Override
    public List<User> findAll() {
        List<User> users = new ArrayList<>();
        String sql = "select * from users";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        while (results.next()) {
            User user = mapRowToUser(results);
            users.add(user);
        }

        return users;
    }

    /* Find a user based on given username. */
    @Override
    public User findByUsername(String username) throws UsernameNotFoundException {
        for (User user : this.findAll())
        {
            if ( user.getUsername().toLowerCase().equals(username.toLowerCase()))
            {
                return user;
            }
        }
        throw new UsernameNotFoundException("User " + username + " was not found.");
    }

    /* Creates a new user based on username, password, and role. */
    @Override
    public boolean create(String username, String password, String role) {
        boolean userCreated = false;

        String insertUser = "insert into users (username,password_hash,role) values(?,?,?)";
        String password_hash = new BCryptPasswordEncoder().encode(password);
        String ssRole = "ROLE_" + role.toUpperCase();

        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
        String id_column = "user_id";
        userCreated = jdbcTemplate.update(con -> {
                    PreparedStatement ps = con.prepareStatement(insertUser, new String[]{id_column});
                    ps.setString(1, username);
                    ps.setString(2, password_hash);
                    ps.setString(3, ssRole);
                    return ps;
                }
                , keyHolder) == 1;
        int newUserId = (int) keyHolder.getKeys().get(id_column);

        return userCreated;
    }

    /* Maps the user based on sql row set. */
    private User mapRowToUser(SqlRowSet rs) {
        User user = new User();
        user.setId(rs.getLong("user_id"));
        user.setUsername(rs.getString("username"));
        user.setPassword(rs.getString("password_hash"));
        user.setAuthorities(rs.getString("role"));
        user.setActivated(true);
        return user;
    }
}