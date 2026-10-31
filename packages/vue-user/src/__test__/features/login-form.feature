Feature: Login form
  As a returning user
  I want to log in with my credentials
  So that I can access my account

  Scenario Outline: The identifier field depends on the configured login type
    Given the app is configured with the "<loginType>" login type
    When I open the login form
    Then I should see "<shown>"
    And I should not see "<hidden>"

    Examples:
      | loginType | shown         | hidden        |
      | email     | Your email    | Your username |
      | username  | Your username | Your email    |

  Scenario: The password field is always shown
    When I open the login form
    Then I should see "Your password"

  Scenario: Submitting valid credentials
    Given I open the login form
    When I fill in "email" with "john.doe@example.com"
    And I fill in "password" with "secret123"
    And I submit the form
    Then the form should be submitted with:
      | email    | john.doe@example.com |
      | password | secret123            |

  Scenario: Submitting an empty form
    Given I open the login form
    When I submit the form
    Then the form should not be submitted
    And I should see "Your email address is required"
    And I should not see "Please provide a valid email address"
    And I should see "Please provide a password"

  Scenario: Submitting a malformed email address
    Given I open the login form
    When I fill in "email" with "not-an-email"
    And I submit the form
    Then the form should not be submitted
    And I should see "Please provide a valid email address"
    And I should not see "Your email address is required"
