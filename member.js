function skillsMember() {
    return {
        name: 'skillsMember',
        restrict: 'E',
        templateUrl: 'skills-copilot-codespaces-vscode/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}