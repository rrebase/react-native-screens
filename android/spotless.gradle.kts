// formatter & linter configuration for kotlin
apply(plugin = "com.diffplug.spotless")

spotless {
  kotlin {
    target("src/**/*.kt")
    ktlint("0.43.0")
    trimTrailingWhitespace()
    indentWithSpaces()
    endWithNewline()
  }
}
