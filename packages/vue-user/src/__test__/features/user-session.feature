Feature: User session
  The user store remembers who is logged in across visits

  Scenario: Auth tokens are remembered
    When I receive the access token "access-123" and the refresh token "refresh-456"
    Then the access token "access-123" should be remembered
    And the refresh token "refresh-456" should be remembered

  Scenario: The user from a previous visit is restored
    Given "test@example.com" logged in during a previous visit
    Then the current user should be "test@example.com"

  Scenario: Logging out
    Given I am logged in as "test@example.com"
    When I log out
    Then no user should be logged in
    And no user should be remembered
