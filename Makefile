#
# Vars
#

NODE_BIN = ./node_modules/.bin

#
# Tasks
# 

# validate:
# 	@${NODE_BIN}/noiit test/*.js
# 	@${NODE_BIN}/jshint lib/** test/**

test:
	@${NODE_BIN}/beefy ./lib/index.js

ci: validate test


.PHONY: test validate