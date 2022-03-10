<template>
    <v-container fill-height style="max-width:350px">
        <v-layout align-center row wrap>
            <v-flex xs12>
                    <v-alert
                        class="mb-3"
                        :value="isError"
                        type="error" >
                        아이디와 비밀번호를 확인해주세요.
                    </v-alert>
                    <v-alert
                        class="mb-3"
                        :value="isSuccess"
                        type="success" >
                        로그인이 완료되었습니다.
                    </v-alert>
                <v-card>
                    <v-toolbar flat>
                        <v-toolbar-title>로그인</v-toolbar-title>
                    </v-toolbar>
                    <div class="pa-3">
                        <v-text-field
                            v-model="email"
                            label="이메일을 입력하세요.">
                        </v-text-field>
                        <v-text-field
                            v-model="password"
                            type="password"
                            label="패스워드를 입력하세요.">
                        </v-text-field>
                        <v-btn depressed large block
                            color="primary"
                            @click="login">
                            로그인
                        </v-btn>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            email: null,
            password: null,
            isError: false,
            isSuccess: false,
            allUsers: [
                { id:1, name:"hoza", email:"hoza@gmail.com", password:"123456" },
                { id:1, name:"lego", email:"lego@gmail.com", password:"234567" },
            ]
        }
    },
    methods: {
        login() {
            // 전체 유저에서 이메일로 유저 찾기
            let selectedUser = null
            this.allUsers.forEach(user => {
                if (user.email == this.email) selectedUser = user
            })

            selectedUser === null
            ? (this.isError = true)
            : selectedUser.password !== this.password
                ? (this.isError = true)
                : (this.isSuccess = true)
            // 유저의 비밀번호와 입력한 비밀번호를 비교
            
        }
    }
}
</script>