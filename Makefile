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
	@${NODE_BIN}/beefy index.jsx --live --open -- -t reactify 

ci: validate test


.PHONY: test validate