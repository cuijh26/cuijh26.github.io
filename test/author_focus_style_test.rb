#!/usr/bin/env ruby
# frozen_string_literal: true

require "minitest/autorun"

class AuthorFocusStyleTest < Minitest::Test
  MIXINS_SCSS = File.expand_path("../_sass/_mixins.scss", __dir__)
  SIDEBAR_SCSS = File.expand_path("../_sass/_sidebar.scss", __dir__)

  def setup
    @mixins = File.read(MIXINS_SCSS)
    @sidebar = File.read(SIDEBAR_SCSS)
  end

  def test_blue_focus_visible_keeps_keyboard_fallback_for_older_browsers
    focus_mixin = extract_block(@mixins, "@mixin blue-focus-visible")

    assert_includes focus_mixin, "&:focus:not(:focus-visible)"
    assert_includes focus_mixin, "outline: none;"
    assert_includes focus_mixin, "&:focus-visible"
    assert_includes focus_mixin, "outline: 2px solid #00369f;"
  end

  def test_author_profile_links_use_shared_focus_visible_style
    author_urls_link = extract_nested_link_block(@sidebar, ".author__urls")
    author_urls_sm_link = extract_nested_link_block(@sidebar, ".author__urls_sm")

    assert_includes author_urls_link, "@include blue-focus-visible;"
    assert_includes author_urls_sm_link, "@include blue-focus-visible;"
    refute_includes author_urls_link, "&:focus {\n      outline: none;"
    refute_includes author_urls_sm_link, "&:focus {\n      outline: none;"
  end

  private

  def extract_nested_link_block(source, selector)
    block = extract_block(source, /^\s*#{Regexp.escape(selector)}\s*\{/)
    link_index = block.index(/\n\s*a\s*\{/)
    raise "Could not find #{selector} link block" unless link_index

    extract_block(block[link_index..], /^\s*a\s*\{/)
  end

  def extract_block(source, opener)
    opener_match = opener.is_a?(Regexp) ? source.match(opener) : source.match(Regexp.escape(opener))
    raise "Could not find #{opener}" unless opener_match

    brace_index = source.index("{", opener_match.begin(0))
    raise "Could not find opening brace for #{opener}" unless brace_index

    depth = 0
    source[brace_index..].each_char.with_index(brace_index) do |char, index|
      depth += 1 if char == "{"
      depth -= 1 if char == "}"
      return source[brace_index + 1...index] if depth.zero?
    end

    raise "Could not find closing brace for #{opener}"
  end
end
